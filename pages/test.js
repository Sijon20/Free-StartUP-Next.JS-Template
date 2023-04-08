import { useState } from "react"
import { supabase } from "@/components/supabase"

export default function test() {
    const login = async () => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'freefiat549@gmail.com',
            password: '19263912g'
          
        })
        if (error) {
            console.log(error)
        }
        else{
        console.log(data)
        }
        // const { data: { user } } = await supabase.auth.getUser()
        // console.log(user )
    }
    const singup = async () => {

        const { data, error } = await supabase.auth.signUp({
            email: 'freefiat549@gmail.com',
            password: '19263912g',
            options: {
                data: {
                  full_name: 'sijon biswas',
                }
              }
          
        })
        if (error) {
            console.log(error)
        }
        else{
        console.log(data)
        }
        // const { data: { user } } = await supabase.auth.getUser()
        // console.log(user )
    }
    return (
        <div className="mt-24 mx-auto container ">
       <button className=" py-1 px-2 bg-primary rounded-md " onClick={login}>Login</button>
       <button className="mx-3 py-1 px-2 bg-primary rounded-md " onClick={singup}>signUp</button>

        </div>
    )
}
