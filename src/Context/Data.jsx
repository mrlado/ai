import React, { useState,createContext, useEffect } from 'react'
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase';



export const Datacontext = createContext(null)



const Data = ({children}) => {
const [UserData , setUserData] = useState(
    {user:{
        Id:'',
        Name:'',
        Email:'',
        avatar:'',
        points: 50,
        unlimited:false,
        

        },
    AIchats:['Recipes By AI', 'Chat with AI','Image Generation']

}
)

useEffect(()=>{
    const userid = window.localStorage.getItem('user')
    const usersCollection = collection(db, "Users");
  if (userid){
    const fetchUserDataAndSetLogin = async () => {
      try {
        const userDoc = doc(usersCollection, userid);
        const docSnapshot = await getDoc(userDoc);
    
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          // Do something with userData
          setUserData(prev => ({...prev,user:{...prev.user,Name:userData.name, avatar:userData.avatar,Id:userData.userid}}))

        } else {
          console.log("Document does not exist.");
          // Handle document not found scenario
        }
      } catch (error) {
        console.log("Error retrieving data:", error);
        // Handle error scenario
      }
    };
    
    fetchUserDataAndSetLogin();
    }
    


},[])


  return (
    <Datacontext.Provider value={{UserData,setUserData}}>
        {children}
    </Datacontext.Provider>
  )
}

export default Data