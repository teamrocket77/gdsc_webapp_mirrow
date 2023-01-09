export async function submitApplicant(data) {
    if (!(data.firstName && data.lastName && data.email)) {//TODO: move this validation to an adapter?
        return false;
    }
    if(!(typeof data.firstName === 'string' && typeof data.lastName === 'string' && typeof data.email === 'string')){//TODO: move this validation to an adapter?
        return false;
    }
    if((data.firstName + data.lastName + data.email).contains('<script')){//one more XSS check to be safe
        return false;
    }
    const namekey = `${data.firstName}-${data.lastName}-${data.email}`.toLowerCase();
    const newref = Firestore_Database.collection('applicants').doc(namekey);
    await newref.set(data);
    return true;
}