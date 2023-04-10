import { supabase } from "@/components/supabase"
import { useEffect, useState } from "react"
import { render } from "react-dom"
import {BsDatabaseFillAdd} from 'react-icons/bs'
import Modal1 from "./modal1"
const Dashboardc = () => {
  const [handlekey, sethandlekey] = useState(1)
  const [allpassdata, setallpassdata] = useState([])
  const [modal, setmodal] = useState(false)
  useEffect(() => {
    async function getPosts() {
      let user = await JSON.parse(localStorage.getItem('sb-mmrvpvmywvxmxyotictf-auth-token'))
  
      const { data, error } = await supabase
        .from('allpassword')
        .select('*')
        .eq('user_id', user.user.id)
      if (error) {
        console.log(error)
      }
      else {
        // console.log(data)
        setallpassdata(data)
      }
    }
    getPosts()
  }, [handlekey])
  const addpass = () => {
    if (modal) {
      setmodal(false)
      sethandlekey(handlekey + 1)
    }
    else {
      setmodal(true)
      sethandlekey(handlekey + 1)
    }
    console.log('addpass')
  }

  return (
    <>
    
    <div key={1} className="mt-36">
    <Modal1 key={handlekey}  modal={modal} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left dark:bg-dark text-dark dark:text-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tittle
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Create Date
              </th>
              <th scope="col" className="px-6 flex py-3">
                <span onClick={addpass} className=" py-1 px-2 cursor-pointer flex bg-primary rounded-md"><BsDatabaseFillAdd className="mr-2" />Add</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allpassdata.map((item,index)=>table(item,index))}
          </tbody>
        </table>
      </div>

    </div>
    </>
  )
}

export default Dashboardc

const table= (item,index)=>{
  return <>
  <tr key={index} className="bg-white border-b dark:bg-dark dark:text-body-color dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.tittle}
                </th>
                <td className="px-6 py-4">
                  {item.password}
                </td>
                <td className="px-6 py-4">

                  {item.description}
                </td>
                <td className="px-6 py-4">
                  {item.createdate}
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              </>
}

