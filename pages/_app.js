import "../styles/global.scss";
import { ThemeProvider } from '../components/ThemeContext';
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta keywords="pavel"></meta>
        <title>Plan Big</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Tektur:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
