import React from 'react'

import OtkutxediMcvane from '../Assets/Otkutxediicon.png'
import Samkutxedi from '../Assets/Sanmkutxediicon.png'
import Otkutxedistapilosperiicon from '../Assets/Otkutxedistapilosperiicon.png'
import Rombicisperi from '../Assets/Rombicisperi.png'

import {Link} from "react-router-dom";



const Chatwith = () => {
  return (
    <div className='h-[100%] '>
        <h1 className='text-[12px] text-[#686B6E] pl-12 pb-6 pt-4 md:pl-3 md:text-[8px]'>PROJECTS</h1>
    
    <div className="productConteiner  overflow-y-auto  max-h-[50vh]  overflow-hidden ">

    <Link to='/RecipesByAI' ><div className="productItem w-[80%] h-[48px] bg-lightBlack m-auto rounded-2xl text-[#686B6E] flex  gap-4 items-center my-4 hover:text-[white] cursor-pointer">
        <img src={OtkutxediMcvane} alt="Squer" className='ml-4 md:ml-6' /> 
        <span className='md:hidden'>Recipes By AI</span>
    </div></Link>
    <Link to='/Voicespeach' >
        <div className="productItem w-[80%] h-[48px] bg-lightBlack m-auto rounded-2xl text-[#686B6E] flex  gap-4 items-center my-4 hover:text-[white] cursor-pointer">
        <img src={Samkutxedi} alt="Squer" className='ml-4 md:ml-6' /> 
        <span className='md:hidden'>Chat with AI</span>
    </div>
    </Link>
    <div className="productItem w-[80%] h-[48px] bg-lightBlack m-auto rounded-2xl text-[#686B6E] flex  gap-4 items-center my-4 hover:text-[white] cursor-pointer">
        <img src={Otkutxedistapilosperiicon} alt="Squer" className='ml-4 md:ml-6' /> 
        <span className='md:hidden'>Image Generation</span>
    </div>
    <div className="productItem w-[80%] h-[48px] bg-lightBlack m-auto rounded-2xl text-[#686B6E] flex  gap-4 items-center my-4 hover:text-[white] cursor-pointer">
        <img src={Rombicisperi} alt="Squer" className='ml-4 md:ml-6' /> 
        <span className='md:hidden'>-----------</span>
    </div>



    </div>


    </div>
  )
}

export default Chatwith