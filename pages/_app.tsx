import '../styles/globals.scss'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import * as ga from '../utils/ga';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Sathishkumar Thangavel - Frontend Engineer</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="ITsathishkumar" />
        <meta name="twitter:creator" content="ITsathishkumar" />
        <meta property="og:url" content="https://sathishkumart.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sathishkumar T - Full Stack Developer" />
        <meta property="og:description" content="Full Stack developer ❤️ web" />
        <meta property="og:image" content="https://sathishkumart.com/preview.png" />
        <meta property="og:image:alt" content="Sathishkumar T - Full Stack Developer" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:locale" content="en_IE" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
