import React, { useEffect, useState } from 'react'
import Login from './Screens/Login'
import MainPage from './Screens/MainPage'
import {signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import { db } from './Firebase/firebase';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

const Layout = () => {
const [login, setLogin] = useState(false) 
const [UserData, setUserData] = useState()


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
          setUserData(userData)
        setLogin(true); // Assuming setLogin is a function to set the login status
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
    <>
      {!login ? <Login Login = {login} SetLogin={setLogin} SetuserData={setUserData}/> : <MainPage UserData={UserData} UserImg={UserData && UserData.user && UserData.user.photoURL ? UserData.user.photoURL : UserData.avatar}/> }
    </>
  )
}

export default Layout