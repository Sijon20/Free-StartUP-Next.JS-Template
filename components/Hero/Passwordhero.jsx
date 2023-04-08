import React, { useEffect, useState } from 'react'
import { MdOutlineCopyAll } from "react-icons/md";
import { BiReset } from "react-icons/bi";
import {Copy} from '../tost'
import { CiSaveUp2 } from "react-icons/ci";
const up_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low_alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const Passwordhero = () => {
const [mpassword, setmpassword] = useState('')
const [length, setlength] = useState(16)
const [number, setnumber] = useState(true)
const [symbol, setsymbol] = useState(true)
const [key, setkey] = useState(1)
useEffect(() => {
  const generatePassword = (length, Number, Symbol) => {
    let password = "";
    const all = up_alphabet + low_alphabet + numbers + symbols;
    const all2 = up_alphabet + low_alphabet + numbers;
    const all3 = up_alphabet + low_alphabet + symbols;
    const all4 = up_alphabet + low_alphabet;

    if (Number && Symbol) {
      for (let i = 0; i < length; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
      }
    }
    else if (Number) {
      for (let i = 0; i < length; i++) {
        password += all2.charAt(Math.floor(Math.random() * all2.length));
      }
    }
    else if (Symbol) {
      for (let i = 0; i < length; i++) {
        password += all3.charAt(Math.floor(Math.random() * all3.length));
      }
    }
    else {
      for (let i = 0; i < length; i++) {
        password += all4.charAt(Math.floor(Math.random() * all4.length));
      }
    }
    setmpassword(password)

  }
  generatePassword(length, number, symbol)
}, [length, number, symbol, key])


  const onchange = (e) => {
    setlength(e.target.value)
  }

  return (
    <div className=" flex flex-col ">
      <div className=' flex flex-row justify-center'>
        <div onClick={(e)=>{
          navigator.clipboard.writeText(mpassword)
          Copy();
        }} className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30">
          {mpassword}
        </div>
        <div className='justify-center flex mx-3  items-center'>
          <div>
            <MdOutlineCopyAll onClick={
              (e) => {
                navigator.clipboard.writeText(mpassword)
                Copy();
              }
            } className='text-3xl cursor-pointer hover:scale-110 ' />
          </div>
          <div className='ml-2'>
            <BiReset onClick={(e)=>{
              let key = Math.random()
              setkey(key)
            }} className='text-3xl  cursor-pointer  hover:scale-110 ' />
          </div>
          <div className='ml-2'>
            <CiSaveUp2 onClick={(e)=>{
              let key = Math.random()
              setkey(key)
            }} className='text-3xl font-extrabold cursor-pointer  hover:scale-110 ' />
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center'>
        <div className="slidecontainer my-6 mx-auto flex md:ml-auto">
          <h3 className="font-bold ml-auto dark:text-gray-50 text-base md:text-lg mr-4">Length</h3>
          <input className="mr-4" type="range" min="8" max="30" onChange={onchange} value={length} id="slider" />
          <p className="font-mono font-bold dark:text-gray-50 text-lg mr-auto" id="outputlength">{length}</p>

        </div>
        <div className="flex flex-row gap-x-2 items-center ml-3 ">
          <div >
            <label htmlFor="numbercheck" className='flex'>
            
            <input type="checkbox" defaultChecked id="numbercheck" onChange={(e)=>{
              if(number){
                setnumber(false)

              }
              else{
                setnumber(true)
              }
            }} className="mr-2" />
            <div>
            Number
            </div>
            </label>
          </div>
          <div >
            <label htmlFor="symbolcheck" className='flex'>
            <input type="checkbox" defaultChecked id="symbolcheck" onChange={()=>{
              if(symbol){
                setsymbol(false)
              }
              else{
                setsymbol(true)
              }
            }} className="mr-2" />
            <div>
            Symbols
            </div>
            </label>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Passwordhero

