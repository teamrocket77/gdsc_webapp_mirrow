import Head from 'next/head';

export default function Error() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>
                     This page indicates an{' '}
                     <code>Error</code>
                </h1>
                <p>
                    Description:{' '}
                    <code>500 - Internal Server Error</code>
                </p>
            </main>
        </div>
    )
}