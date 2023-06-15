import React from 'react'

const Settings = () => {
  return (
    <div onClick={()=>{
      window.localStorage.removeItem('user');
      window.location.reload();
    }}>Settings</div>
  )
}

export default Settings








