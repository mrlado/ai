import React, { useContext } from 'react'
import Logo from '../Assets/Logo.png'
import GoogleLogo from '../Assets/GoogleIcon.png'
import rightBGimage from '../Assets/LoginPageImage.png'
import { auth ,db,provider  } from '../Firebase/firebase'
import {signInWithPopup} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import {Datacontext} from '../Context/Data'




const Login = (props) => {


const {UserData,setUserData} = useContext(Datacontext)


const GoogleSignin = async()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
    const userCollection = collection(db, "Users"); // Reference to the "Users" collection in Firestore
    const newData = { 
      userid: result.user.uid, 
      name:result.user.displayName, 
      avatar:result.user.photoURL, 
      RecipiesByAI:{
        Messages:[]
      },
      ChatwithAI:{
        Messages:[]
      },
      ImageGeneration:{
        Messages:[]
      }
      };
        setUserData((prev) => ({
          ...prev,
          user:{
            ...prev.user,
            Id:result.user.uid,
            Name:result.user.displayName,
            Email:result.user.email, 
            avatar:result.user.photoURL
          }
        })) // Data to be added to the document

        window.localStorage.setItem('user', result.user.uid)
      //   Set the data in the document with the user's UID as the document ID

        setDoc(doc(userCollection, result.user.uid), newData)
          .then(() => {
            console.log('Data added successfully.');
          })
          .catch((error) => {
            console.log('Error adding data:', error);
          });
        props.SetLogin(true)
        props.SetuserData(result)})
    .catch((error) => {
      alert(error.message);
    });
}

  return (
    <div className='flex justify-around items-center'>
        <div className="leftdiv w-2/4  h-[100vh] pt-6 pl-4 xl:w-full">
            <div className="logo"><img src={Logo} alt="Logo" /></div>
            <div className="TextContainer flex flex-col justify-center items-start pl-[24%] pt-14">
            <h1 className='flex justify-center items-center gap-3 text-3xl'>Hello, <span className='TextGradient font-[400] text-[36px]'>Mikotaja!</span></h1>
            <div className='mt-4'><span className='text-[#9B9C9E]'>Log in to Artificium to start creating magic.</span></div>
            </div>
            <div className="loginBtn flex justify-center items-center flex-wrap h-full -mt-12">
                <div className="googlebtn w-[100%] h-[48px] bg-[#1A1D21] p-4 ml-10 rounded-[12px] flex justify-center  cursor-pointer items-center gap-4 hover:shadow-md hover:shadow-[#B6F09C]" onClick={GoogleSignin}>
                    <img src={GoogleLogo} alt="GoogleLogo" />
                    <h1 className='text-[#686B6E]'>Sign in or Register with Google</h1>
                </div>
            </div>
            <div className='divider flex  justify-center items-center gap-4 -mt-[350px]'>
                <div className='line w-[164px] border border-[#363A3D] h-[1px] md:w-[50px]'></div>
                <h1 className='text-[#686B6E] text-[12px]'>Sign in or Register</h1>
                <div className='line w-[164px] border border-[#363A3D] h-[1px] md:w-[50px]'></div>
            </div>
            <div className='checkBoxRemember_ForgotPass flex justify-around my-8'>

            </div>

        </div>
        <div className={`rightdiv w-2/4 xl:hidden object-contain flex justify-around`} >
            <img src={rightBGimage} alt="rightBGimage" className='max-h-[100vh]' />
        </div>



    </div>
  )
}

export default Login