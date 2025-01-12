import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { SubmitAction, getdata, deleteData } from "./action/form";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Edit from './components/Edit';
import { useContext, createContext } from 'react';


function App() {

  // let show = true;
  const [show, setshow] = useState(true)

  const [EditMode, setEditMode] = useState(true)

  const [siteArray, SetsiteArray] = useState([])

  const [urlInput, seturlInput] = useState("")
  const [userNameInput, setuserNameInput] = useState("")
  const [passInput, setpassInput] = useState("")

  useEffect(() => {
    getdata(SetsiteArray);
  }, [])

  useEffect(() => {
    getdata(SetsiteArray);
  }, [SetsiteArray])

  const updateSiteArray = (data) => {
    SetsiteArray(data);
  }
  const editform = (props) => {
    seturlInput(props.Website);
    setuserNameInput(props.Username);
    setpassInput(props.pass);
  }


  return (
    <>
        <ToastContainer theme="dark" />
        <div className= {EditMode&&"blur-sm"}>
          <div className="w-full flex justify-center text-[rgb(3,11,13)]">
            <div className="w-full h-svh bg-[linear-gradient(rgb(44,217,192),rgb(60,157,201))] fixed top-0">
              <Navbar />
              <div className="addArea mx-auto my-2 w-[82%]">
                <form id='form' onSubmit={(e) => { SubmitAction(e, SetsiteArray); toast('Added!'); }}>
                  <input type="url" name="Website" id="URL" value={urlInput} onChange={(e) => { seturlInput(e.value) }} placeholder='Enter the URL' required={true} className='w-full my-2 rounded-full px-2' />
                  <div className="flex justify-between items-center">
                    <input type="text" name="Username" id="Username" value={userNameInput} onChange={(e) => { setuserNameInput(e.value) }} placeholder='Enter the Username' required={true} className='w-[48%] rounded-full pl-2' />
                    <div className='w-[48%] flex items-center gap-1'>
                      <input type={show ? "password" : "test"} name="pass" id="Pass" value={passInput} onChange={(e) => { setpassInput(e.value) }} placeholder='Enter the Password' required={true} className='w-full rounded-full pl-2' />
                      <div onClick={() => { setshow(!show) }} className='bg-white py-1 px-2 rounded-full cursor-pointer'><FaEye /></div>
                    </div>
                  </div>
                  <button type="submit" className='bg-black text-white font-semibold w-full mt-2 rounded-full'>Add</button>
                </form>
              </div>
            </div>
            <div className="w-full md:w-[95%] mx-auto min-h-[75vh] bg-[rgb(235,246,255)] absolute z-10 top-[30svh] rounded-[2rem]">
              <hr className='bg-slate-300 h-1 w-1/3 my-8 mx-auto rounded-md' />
              <div className='text-xl font-bold mx-5 my-3'>Recently Added</div>
              <div className="cart flex items-center flex-col mx-auto">

                {siteArray.map((item, index) => (
                  <Card key={item._id} Website={item.Website} Username={item.Username} pass={item.pass} func={updateSiteArray} editfunc={editform} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Edit editvalue= {EditMode} editfunc={setEditMode}/>
    </>
  )

}

export default App