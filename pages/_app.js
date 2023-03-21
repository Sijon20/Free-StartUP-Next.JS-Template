import Header from '@/components/Header'
import '@/styles/globals.css' // Global CSS
import Footer from '@/components/Footer'
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from '../components/Common/providers'
// import "node_modules/react-modal-video/css/modal-video.css";

export default function App({ Component, pageProps }) {
  return <>
  <Providers>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </Providers>
  </>
}

