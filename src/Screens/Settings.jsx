import React from 'react'

const Settings = () => {
  return (
    <div className='w-full bg-Black h-[96vh] rounded-2xl ml-6' 

    >
    
    <div className=' m-auto max-w-full max-h-[90vh] flex justify-center items-center pt-40'>
      <form action="submit" className='flex justify-center items-center flex-col gap-6'>
        
        <div className='flex justify-center items-center gap-6'>
        <input type="text" className='bg-[gray] rounded-xl p-3' placeholder='name'/>
        <input type="text" className='bg-[gray] rounded-xl p-3' placeholder='name'/>
        </div>
        <div className='flex justify-center items-center gap-6'>
        <input type="text" className='bg-[gray] rounded-xl p-3' placeholder='name'/>
        <input type="text" className='bg-[gray] rounded-xl p-3' placeholder='name'/>
        </div>

      <button className='w-[200px] border border-[red] text-[red]'
          onClick={()=>{
            window.localStorage.removeItem('user');
            window.location.reload();
          }}
      > Sign Out</button>
      </form>



    </div>




    </div>
  )
}

export default Settings








