import Header from '@/components/Header'
import '@/styles/globals.css' // Global CSS
import Footer from '@/components/Footer'
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from '../components/Common/providers'
import { useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';
// import "node_modules/react-modal-video/css/modal-video.css";
import Lodear from '@/components/Lodear';

export default function App({ Component, pageProps }) {
  const [lodear, setlodear] = useState(false)
  useEffect(() => {
    setlodear(true)
    if(cookieCutter.get('userdata') && cookieCutter.get('jwt')){
    const userdata =JSON.parse(cookieCutter.get('userdata'));
    console.log(userdata)
    const {username,email} = userdata;
    setprofile({name:username,email:email})
    setisAuthenticated(true)
    setheaderkey(Math.random())
    
    }
    setlodear(false)
    }, [])
    const [profile, setprofile] = useState({
      name: "John Doe",
      email: "example@gmail.com"
    })
    const [headerkey, setheaderkey] = useState(1)
  
    const [isAuthenticated, setisAuthenticated] = useState(false);
  return <>
  <Providers>
    {lodear ? (<Lodear/>):
          (<>
          <Header lodear={lodear} headerkey={headerkey} profile={profile} isAuthenticated={isAuthenticated} />
          <Component  {...pageProps} />
          <Footer />
          <ScrollToTop />
          </>
          )
        }
        </Providers>
  </>
}

