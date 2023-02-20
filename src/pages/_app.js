import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
