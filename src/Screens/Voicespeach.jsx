import React, { useEffect, useState } from 'react'
import MainareaiconArtificium from '../Assets/Mainareaicon_Artificium.png'
import MainareaiconChat from '../Assets/Mainareaicon_Chat.png'
import MainareaiconFolder from '../Assets/Mainareaicon_Folder.png'
import {MdKeyboardVoice} from'react-icons/md'
import { Avatar } from '@mui/material'
import SandIcon from '../Assets/Sandicon.png'

const Voicespeach = (props) => {


  return (
    <div className='MainArea_Conteiner px-4'>
        <div className="header w-full h-[184px] bg-Black  rounded-2xl pl-4 pt-4 ">
            <h1 className='text-[20px] text-[white] md:text-[12px]'>{props.Title|| 'noDAta'}</h1>
            <h3 className='text-[14px]  text-textlightblack md:text-[12px]'>{props.Decription|| 'Marketing Campaign for a new TV series Launch'}</h3>

            <div className='mainareaNavigation mt-10 '>
                <ul className='flex  items-center gap-3 md:justify-center'>
                    <li className='text-[14px] text-textlightblack hover:text-[white] bg-lightBlack w-[152px] rounded-2xl h-16 flex justify-center items-center gap-3  md:w-[25%]'>
                        <img src={MainareaiconArtificium} alt="MainareaiconArtificium" />
                        <span className='md:hidden'>{props.Navone || 'Artificium'}</span>
                    </li>
                    <li className='text-[14px] text-textlightblack hover:text-[white] bg-lightBlack rounded-2xl w-[152px] h-16 flex justify-center items-center gap-3 md:w-[25%]'>
                        <img src={MainareaiconChat} alt="MainareaiconArtificium" />
                        <span className='md:hidden'>{props.Navtwo || 'Chat'}</span>
                    </li>
                    <li className='text-[14px] text-textlightblack hover:text-[white] bg-lightBlack rounded-2xl w-[152px] h-16 flex justify-center items-center gap-3 md:w-[25%]'>
                        <img src={MainareaiconFolder} alt="MainareaiconArtificium" />
                        <span className='md:hidden'>{props.Navthree || 'Library'}</span>
                    </li>
                </ul>
            </div>
        </div>
    <div className="ConversationArea w-full h-[68vh] p-4 overflow-y-auto">
    
    
    {/* { sortedMessages && sortedMessages.map((value, index, array) => {

        if(value.sender === "client"){
            return<div key={index} className='clientSand flex items-start max-w-[80%] gap-4  whitespace-normal my-4 text-[14px] text-[#B6F09C] '>
            <Avatar src=''/>
            <h1 className='w-[100%] h-full'> {value.message}</h1>
            </div>
        }else{
            return<div  key={index} className='Ai flex items-start max-w-[80%] gap-4 whitespace-normal my-4 text-[14px]  ml-auto  text-textlightblack'>

            <h1 className='w-[100%] h-full'> {value.message}</h1>
            <Avatar src={MainareaiconArtificium} sx={{width:'20px', height:'20px'}}/>
        </div>
        }
    
    })} */}

    </div>
    <div className='inputField w-full h-[7vh] p-2 bg-Black rounded-2xl flex md:-mt-6'> 
    <form action="onsubmit" className='flex justify-around items-center gap-4 pl-8 md:pl-0'>
    <input type="text" 
    placeholder={props.InputPlaceholder || 'You can ask me anything! I am here to help.'} 
    className='w-[60vw] h-full rounded-2xl pl-4 bg-Black md:w-[50vw] md:text-[12px]'
    />
    <button className='w-[48px] h-[48px] bg-lightBlack flex justify-center items-center rounded-xl'>
    <img src={SandIcon} alt="SandIcon" />
    </button>
    </form>
    </div>
    </div>
  )
}

export default Voicespeach