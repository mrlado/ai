import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import {Datacontext} from '../Context/Data';


const ClientArea = ({ClientImage}) => {

  const {UserData,setUserData} = useContext(Datacontext)
  return (
    <div className='flex justify-around items-center py-4 border-b border-[#1A1D21] mb-4 '>
        <div className="avatar"><Avatar src={ClientImage || ''}/></div>
        <div className="TextArea md:hidden">
            Lado 
            <h3 className='text-[12px] text-[#B6F09C] uppercase'>{UserData.user.points} points</h3>
        </div>
        {/* <div><MdKeyboardArrowDown/> </div> */}
    </div>
  )
}

export default ClientArea