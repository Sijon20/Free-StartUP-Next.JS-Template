import React, { useEffect, useState } from 'react'
import { MdOutlineCopyAll } from "react-icons/md";
import { BiReset } from "react-icons/bi";
import { render } from 'react-dom';
const up_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low_alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const Passwordhero = () => {
  // useEffect(() => {
  //   generatePassword();
  // }, [])
  // const slider = document.getElementById("slider");

  const [mpassword, setmpassword] = useState('')
  const [length, setlength] = useState(8)
const [number, setnumber] = useState(false)
const [symbol, setsymbol] = useState(false)

const rpass=(a)=>{
  if(a===0){
    return up_alphabet[Math.floor(Math.random()*(up_alphabet.length-1))]
  }
  else if(a===1){
    return low_alphabet[Math.floor(Math.random()*(low_alphabet.length-1))]
  }
  else if(a===2){
    return numbers[Math.floor(Math.random()*(numbers.length-1))]
  }
  else if(a===3){
    return symbols[Math.floor(Math.random()*(symbols.length-1))]
  }
}
// for(let i=0;i<length;i++){
//   setmpassword(...mpassword,rpass(Math.floor(Math.random()*4)))
// }





  const onchange = (e) => {
    setlength(e.target.value)
  }

  return (
    <div className=" flex flex-col ">
      <div className=' flex flex-row justify-center'>
        <div className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30">
          {mpassword}
        </div>
        <div className='justify-center flex mx-3  items-center'>
          <div>
            <MdOutlineCopyAll className='text-3xl cursor-pointer hover:scale-110 ' />
          </div>
          <div className='ml-2'>
            <BiReset className='text-3xl cursor-pointer hover:scale-110 ' />
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center'>
        <div className="slidecontainer my-6 mx-auto flex md:ml-auto">
          <h3 className="font-bold ml-auto dark:text-gray-50 text-base md:text-lg mr-4">Length</h3>
          <input className="mr-4" type="range" min="8" max="25" onChange={onchange} value={length} id="slider" />
          <p className="font-mono font-bold dark:text-gray-50 text-lg mr-auto" id="outputlength">{length}</p>

        </div>
        <div className="flex flex-row gap-x-2 items-center ml-3 ">
          <div >
            <label htmlFor="numbercheck" className='flex'>
            <input type="checkbox" id="numbercheck" className="mr-2" />
            <div>
            Number
            </div>
            </label>
          </div>
          <div >
            <label htmlFor="symbolcheck" className='flex'>
            <input type="checkbox" id="symbolcheck" className="mr-2" />
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

{/* <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                            <span className="opacity-0">
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        Number
                      </label>
                    </div> */}