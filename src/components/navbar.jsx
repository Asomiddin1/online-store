import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  return (
   <div className='bg-[blue]'>
     <div className='mx-auto w-full  py-2 flex w-max-[1000px] justify-around '>
      <div className='sm:w-[25%] w-[50%]'>
      <h1 className='text-white text-[20px] pl-6'>Online Store.Uz </h1>
      </div>
      <div className='w-[35%] sm:block  hidden ' >
        <input className='w-[50%] input_nav outline-none px-2 py-1  ' placeholder='Search...' type="search" />
        <button className='text-white bg-[#289ee2] py-1 input_left_nav px-2  '> <FontAwesomeIcon icon={faSearch} /> Search</button>
      </div>

      <div className='sm:w-[35%] w-[40%] flex justify-around'>
        <FontAwesomeIcon icon={faHeart} className='text-[#fff] fa-2x' />

        <FontAwesomeIcon icon={faUser} className='fa-2x text-white' />
        <FontAwesomeIcon icon={faCartShopping}  className='fa-2x text-white' />
       

      </div>
      

    </div>

    <div className='w-[100%] sm:hidden  block  py-3 text-center' >
        <input className='w-[70%] input_nav outline-none px-2 py-1  ' placeholder='Search...' type="search" />
        <button className='text-white bg-[#289ee2] py-1 input_left_nav px-2  '> <FontAwesomeIcon icon={faSearch} /> Search</button>
      </div>
   </div>
  )
}

export default Navbar