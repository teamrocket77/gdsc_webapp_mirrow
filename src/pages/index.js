import Head from "next/head";
import styles from "../styles/Home.module.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/GoogleSans-Bold-v1.27.ttf";
import "./fonts/GoogleSansDisplay-Regular-v1.27.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a> with{" "}
//           <a href="https://mui.com/">Material-UI!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>
//       </main>
//     </div>
//   )
// }
