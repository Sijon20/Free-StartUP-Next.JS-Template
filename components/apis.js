const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
import { EmailAlreadyExist,SingUPSuccess,ServerError } from "./tost";
import { NextResponse, NextRequest } from 'next/server'
import cookieCutter from 'cookie-cutter'
const userregister = async (userdata) => {
   try{
    const { name, email, password } = userdata;
    const response = await fetch(`${API_BASE_URL}/auth/local/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: name, email: email, password: password }) })
    const resdata = await response.json();
    // console.log(resdata.error.message);
    if (resdata.error) {
     console.log(resdata.error.message);
     EmailAlreadyExist();
    }
    else if (resdata.user) { 
    cookieCutter.set('userdata', JSON.stringify(resdata.user), { expires: new Date(resdata.jwt.expires) })
    cookieCutter.set('jwt', JSON.stringify(resdata.jwt), { expires: new Date(resdata.jwt.expires) })
    console.log(resdata.jwt);
    // const data =JSON.parse(cookieCutter.get('userdata'));
        const apfetch = await fetch(`${API_BASE_URL}/allpasswords`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resdata.jwt}`
        },
        body: JSON.stringify({
            data: {
                email: resdata.user.email,
            }
        })
        
    });
    const resd = await apfetch.json();
        console.log(resd);
    SingUPSuccess();
    }
   }catch(err){
    console.log(err);
    ServerError();
    }
    }



export { userregister };