export default function Error() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                     This page indicates an{' '}
                     <code className={styles.code}>Error</code>
                </h1>
                <p className={styles.description}>
                    Description:{' '}
                    <code className={styles.code}>500 - Internal Server Error</code>
                </p>
            </main>
        </div>
    )
}