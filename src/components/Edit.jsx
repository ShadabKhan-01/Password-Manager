import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";



const Edit = (props) => {

    const [show, setshow] = useState(true)

    const [urlInput, seturlInput] = useState("")
    const [userNameInput, setuserNameInput] = useState("")
    const [passInput, setpassInput] = useState("")

    return (
        <div className={!props.editvalue&&"hidden"}>
            <div className='p-4 shadow-xl h-80 w-full md:w-3/4 bg-[rgb(235,246,255)] z-10 fixed mx-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg'>
                <h3 className='text-center font-bold'>Edit Values</h3>
                <form id='Editform'>
                    <input type="url" name="EditedWebsite" id="EditedUrl" value={urlInput} onChange={(e) => { seturlInput(e.value) }} placeholder='Enter the URL' required={true} className='w-full my-2 rounded-full px-2' />
                    <div className="flex justify-between items-center">
                        <input type="text" name="EditedUsername" id="EditedUsername" value={userNameInput} onChange={(e) => { setuserNameInput(e.value) }} placeholder='Enter the Username' required={true} className='w-[48%] rounded-full pl-2' />
                        <div className='w-[48%] flex items-center gap-1'>
                            <input type={show ? "password" : "test"} name="Editedpass" id="Editedpass" value={passInput} onChange={(e) => { setpassInput(e.value) }} placeholder='Enter the Password' required={true} className='w-full rounded-full pl-2' />
                            <div onClick={() => { setshow(!show) }} className='bg-white py-1 px-2 rounded-full cursor-pointer'><FaEye /></div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                    <button type="reset" className='bg-black text-white font-semibold w-full mt-2 rounded-full'>Cancel</button>
                    <button type="submit" className='bg-black text-white font-semibold w-full mt-2 rounded-full'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit
