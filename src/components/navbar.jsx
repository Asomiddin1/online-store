import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='mx-auto w-full bg-[blue] py-2 flex w-max-[1000px] justify-around '>
      <div className='w-[20%]'>
      <h1 className='text-white pl-4'>Online Store.Uz </h1>
      </div>
      <div className='w-[40%] sm:block  ' >
        <input className='w-[50%] input_nav outline-none px-2 py-1' placeholder='Qidirish...' type="search" />
        <button className='text-white bg-[#289ee2] h-full input_left_nav px-2'> <FontAwesomeIcon icon={faSearch} /> Qidirish</button>
      </div>

      <div className='w-[40%] flex justify-around'>
        <FontAwesomeIcon icon={faHeart} className='text-[#fff] fa-2x' />

        <FontAwesomeIcon icon={faUser} className='fa-2x text-white' />
        <FontAwesomeIcon icon={faCartShopping}  className='fa-2x text-white' />
       

      </div>

    </div>
  )
}

export default Navbar