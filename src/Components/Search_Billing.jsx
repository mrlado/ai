import React, { useContext, useState } from 'react'
import searchicon from '../Assets/Searchicon.png'
import BillingIcon from '../Assets/Billingicon.png'
import {Datacontext} from '../Context/Data';

const Search_Billing = () => {
const [searchvalue,setSearchvalue] = useState('')
const [Linkto, setLinkto] = useState('')
const {UserData,setUserData} = useContext(Datacontext)
  
  const SearchAI = (e)=>{
  e.preventDefault()
    let inputvalue = e.target.value
    // UserData.AIchats.map((value, index, array) => {
    //   if( value.toLowerCase().startsWith(inputvalue)){
    //     setSearchvalue(inputvalue)
    //   } 
    // })
    setSearchvalue(inputvalue)
  }

  return (
    <div className='search_Billing_Container w-full border-b-2 border-lightBlack'>
      <h1 className='text-[12px] text-[#686B6E] pl-12 pb-6 md:pl-0 md:hidden' >GENERAL</h1>
        <div className='w-[80%] m-auto h-[48px] relative  md:hidden'> 
        <input type='text' className='w-full bg-Black h-[28px] pl-8 ' placeholder='Search...' value={searchvalue} onChange={SearchAI} /> 
        <img src={searchicon} alt="searchicon" className='absolute top-1' /> 
        </div>
        <div className='w-[80%] m-auto h-[48px] relative flex justify-center items-center gap-4 text-[#9eabbb]  hover:text-[white] cursor-pointer'> <img src={BillingIcon} alt="BillingIcon"  className='md:w-5'/> <h1 className='w-full text-[16px]  font-[600] md:hidden '>  Billing </h1> </div>
    </div>
  )
}

export default Search_Billing