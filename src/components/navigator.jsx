import React from 'react'

const Navigator = () => {
  return (
    <div className='flex w-full justify-around' >
        <div className='h-[10px] w-[30px]'>
            <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
            <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
            <div className='h-[5px] bg-black mt-1 rounded-[2px]' ></div>
            
        </div>
        <h3 className='text-[22px]'>Kategoriya</h3>
        <h3 className='text-[22px]'>Kontakt</h3>
        <h3 className='text-[22px]'>Profil</h3>
    </div>
  )
}

export default Navigator