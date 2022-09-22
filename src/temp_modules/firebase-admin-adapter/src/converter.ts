import { Timestamp, DocumentData } from "firebase-admin/firestore"
import type { FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase-admin/firestore"

const isTimestamp = (value: unknown): value is Timestamp => 
    typeof value == "object" && value !== null && value instanceof Timestamp

interface GetConverterOptions {
    excludeId?: boolean
}

export const getConverter = <Document extends Record<string, unknown>>(options?: GetConverterOptions): FirestoreDataConverter<Document> => ({
    
    toFirestore(object: WithFieldValue<DocumentData>): DocumentData {
        const document: Record<string, unknown> = {}
        Object.keys(object).forEach((key) => {
            if (object[key] !== undefined) {
                document[key] = object[key]
            }
        })
        return document
    },

    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Document {
        if (!snapshot.exists) {
            return snapshot as unknown as Document
        }
        let document = snapshot.data()
        if (!options?.excludeId) {
            document = {
                ...document,
                id: snapshot.id
            }
        }
        for (const key in document) {
            const value = document[key]
            if (isTimestamp(value)) {
                document = {
                    ...document,
                    [key]: value.toDate()
                }
            }
        }
        return document as unknown as Document
    }
})