import { useEffect, useState } from 'react';
import Layout from '../componnent/Layout';
import Loding from "../componnent/Loding";
import { FromProvider } from '../context/fromContext';
import { TrandProvider } from '../context/trandTodayContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [preloading, setpreloading] = useState(true);


  useEffect(() => {
    setTimeout(() => setpreloading(false), 2200);
  }, []);



  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      {!preloading ? <TrandProvider><FromProvider>< Layout > <Component {...pageProps} /></Layout ></FromProvider></TrandProvider> : <Loding />
      }
    </>
  )



}

export default MyApp;
