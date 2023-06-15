import React from 'react'
import ClientArea from '../Components/ClientArea'
import Search_Billing from '../Components/Search_Billing'
import Chatwith from '../Components/Chatwith'
import { IoSettingsOutline } from 'react-icons/io5';
import MainareaLayout from './MainareaLayout';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Settings from './Settings';
import Voicespeach from './Voicespeach';


const MainPage = ({UserImg}) => {



  
  return (
    <div className='flex w-full h-full justify-center item-center' >
        <div className="leftNavigation w-1/4 h-[96vh] bg-[#0D0F10] mt-[2vh] rounded-[20px] ">
            <div className="ClientArea"> <ClientArea ClientImage={UserImg}/></div>
            <div className="Search_Billing"><Search_Billing/> </div>
            <div className="Products"><Chatwith/></div>
            <div className="currentproduct flex justify-center items-center mt-40 ">
              <Link to='/'><IoSettingsOutline className='w-10 h-10 text-[#686B6E] cursor-pointer hover:text-[white]'/> </Link>
            </div>
        </div>
        <div className="mainarea w-full md:w-3/4  mt-[2vh] h-[96vh] ">
          <Routes>
            <Route path='/' element={<Settings/>} />
            <Route path='/RecipesByAI' 
            element={
            <MainareaLayout 
            Title='Recipes By AI' 
            InputPlaceholder='Ingredients...'
            Decription = "Not sure what to cook tonight?"
            Navone=''
            Navtwo=''
            Navthree=''
            RefreshData='1'
            />}
             />
            <Route path='/ChatwithAI' element={
            <MainareaLayout 
            Title='Chat with AI'
            InputPlaceholder='chat...'
            Decription = "ask me anything..."
            Navone=''
            Navtwo=''
            Navthree=''
            RefreshData='2'
            
            />} />

        <Route path='/Voicespeach' element={
        <Voicespeach
        Title='Recipes By AI' 
        InputPlaceholder='Ingredients...'
        Decription = "Not sure what to cook tonight?"
        Navone=''
        Navtwo=''
        Navthree=''
        RefreshData='1'
        
        />} />

          </Routes>
        </div>

    </div>
  )
}

export default MainPage