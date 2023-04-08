import Header from '@/components/Header'
import '@/styles/globals.css' // Global CSS
import Footer from '@/components/Footer'
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from '../components/Common/providers'
import { useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';
import { supabase } from '@/components/supabase';
// import "node_modules/react-modal-video/css/modal-video.css";
import Lodear from '@/components/Lodear';

export default function App({ Component, pageProps }) {
  const [lodear, setlodear] = useState(false)
  useEffect(() => {
    setlodear(true)
    if(localStorage.getItem('sb-mmrvpvmywvxmxyotictf-auth-token')){
      setisAuthenticated(true)
      const getdata = async () => {
        try{
      const { data: { user } } = await supabase.auth.getUser()
      setprofile({
        name: user.user_metadata.full_name,
        email: user.email
      })
    }
    catch(err){
      console.log(err)
    }
      
    }
    getdata()
    setlodear(false)
    }
    else{
      setlodear(false)
    }
  }, [])
    const [profile, setprofile] = useState({
      name: "",
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

