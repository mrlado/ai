import React, { useEffect, useState } from 'react'

import MainareaiconArtificium from '../Assets/Mainareaicon_Artificium.png'
import MainareaiconChat from '../Assets/Mainareaicon_Chat.png'
import MainareaiconFolder from '../Assets/Mainareaicon_Folder.png'
import SandIcon from '../Assets/Sandicon.png'
import { Avatar } from '@mui/material'
import { arrayUnion,doc, getDoc,updateDoc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/firebase'
import {useLocation} from 'react-router-dom';


const MainareaLayout = (props) => {
const location = useLocation();
const [message, setMessage] = useState('');
const [FBmessages, setFBMessages] = useState([]);
const [refreshMessages, setRefreshMessages] = useState(false);

const userid =    window.localStorage.getItem('user')
const docRef = doc(db, 'Users', userid);
// Get messages form firebase start
useEffect(() => {
  getMessages();
}, []);

const getMessages = async () => {
  try {
    const userRef = doc(db, 'Users', userid);
    const docSnapshot = await getDoc(userRef);
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      if (userData.RecipiesByAI && userData.RecipiesByAI.Messages) {
        setFBMessages(userData.RecipiesByAI.Messages);
      }
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
};
/// Get messages form firebase end


//update messages imadiatly start
useEffect(() => {
  const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      if (userData.RecipiesByAI && userData.RecipiesByAI.Messages) {
        setFBMessages(userData.RecipiesByAI.Messages);
      }
    }
  });

  // Clean up the listener when the component unmounts
  return () => {
    unsubscribe();
  };
}, []);
//update messages imadiatly end

  const sendMessage = async (e) => {
    e.preventDefault();

    const newMessage = {
      sender: 'client',
      message: message,
      timestamp: new Date(),
    };

if (message.length> 0 ){
  try {
    await updateDoc(docRef, {
      'RecipiesByAI.Messages': arrayUnion(newMessage),
    });
    console.log('Document updated');
  } catch (error) {
    console.error('Error updating document:', error);
  }
  }else return

    setMessage('');
    setRefreshMessages(!refreshMessages);
  };
  


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

    { FBmessages && FBmessages.map((value, index, array) => {

        if(value.sender === "client"){
            return<div key={index} className='clientSand flex items-center max-w-[80%] gap-4  whitespace-normal my-4 text-[14px] text-textlightblack '>
            <Avatar src=''/>
            <h1 className='w-[100%] h-full text-left'> {value.message}</h1>
            </div>
        }else{
            return<div  key={index} className='Ai flex items-center max-w-[80%] gap-4 whitespace-normal my-4 text-[14px]  ml-auto   text-[#B6F09C]'>

            <h1 className='w-[100%] h-full  text-right'> {value.message}</h1>
            <Avatar src={MainareaiconArtificium} sx={{width:'20px', height:'20px'}}/>
        </div>
        }
    
    })}

    </div>
    <div className='inputField w-full h-[7vh] p-2 bg-Black rounded-2xl flex md:-mt-6'> 
    <form action="onsubmit" className='flex justify-around items-center gap-4 pl-8 md:pl-0'>
    <input type="text" 
    placeholder={props.InputPlaceholder || 'You can ask me anything! I am here to help.'} 
    className='w-[60vw] h-full rounded-2xl pl-4 bg-Black md:w-[50vw] md:text-[12px]'
    value={message}
    onChange={(e)=>{setMessage(e.target.value)}}
    />
    <button className='w-[48px] h-[48px] bg-lightBlack flex justify-center items-center rounded-xl'onClick={sendMessage}>
    <img src={SandIcon} alt="SandIcon" />
    </button>
    </form>
    </div>
    </div>
  )
}

export default MainareaLayout