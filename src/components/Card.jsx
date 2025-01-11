import React from 'react'
import { IoCopy } from 'react-icons/io5'
import { deleteData } from '../action/form'
import { toast } from 'react-toastify';
// import '.../src/App.css'

const Card = (props) => {

  const deleteCard =async ()=>{
    if(confirm("Delete Credentials ?")){
      const temp =await deleteData(props)
      console.log(temp);
      props.func(temp);
      toast('Deleted!');
    }
  }
  const editform =async ()=>{
    props.editfunc(props);
    const temp =await deleteData(props)
    console.log(temp);
    props.func(temp);
    toast('Credential Deleted, Add again with edited values!');
  }

  const copyDetails = (data)=>{
    navigator.clipboard.writeText(data)
    toast('Copied!');
  }

  // console.log(props)
  return (
    <div className='border-solid border-2 border-[rgb(216,237,255)] shadow-xl shadow-[rgb(224,241,255)] w-3/4 px-2'>
      <ul>
        <li className='font-semibold px-2 flex justify-between'>
          <span className="data"><a href={props.Website} target="_blank" rel="noopener noreferrer">URL: {props.Website}</a></span>
          <ul className='flex gap-1'>
            <li className='edit cursor-pointer' onClick={editform}><lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover"></lord-icon></li>
            <li className='delete cursor-pointer' onClick={deleteCard}><lord-icon src="https://cdn.lordicon.com/hwjcdycb.json" trigger="hover"></lord-icon></li>
          </ul>
        </li>
        <li className='flex justify-between pr-3'><span className='text-gray-500'>USERNAME: {props.Username}</span><span><IoCopy onClick={()=>copyDetails(props.Username)} className='w-[20px] h-[20px] cursor-pointer'/></span></li>
        <li className='flex justify-between pr-3'><span className='text-gray-500'>PASSWORD: {"*".repeat(8)}</span><span><IoCopy onClick={()=>copyDetails(props.pass)} className='w-[20px] h-[20px] cursor-pointer'/></span> </li>
      </ul>
    </div>
  )
}

export default Card
