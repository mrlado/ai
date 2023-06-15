import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lottie from 'lottie-react'
import AnimationData from '../Assets/LoadingAnimation.json' 

const Loading = () => {

  return (
    <div className='w-[100vw] h-[100vh] flex absolute'>
        <div className='w-40 m-auto'>
    <Lottie animationData={AnimationData} />
    </div>


    </div>
  )
}

export default Loading