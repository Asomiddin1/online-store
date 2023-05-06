import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [user, setUser] = useState(false)

  const userHandler = () => {
    setUser(prev => !prev)
  }

  return (
    <div className='bg-[blue]'>
      <div className='mx-auto w-full  py-2 flex w-max-[1000px] justify-around '>
        <div className='sm:w-[25%] w-[50%]'>
          <Link to='/'><h1 className='text-white text-[20px] sm:pl-6'>Online Store.Uz </h1></Link>
        </div>
        <div className='w-[35%] sm:block  hidden ' >
          <input className='w-[50%] input_nav outline-none px-2 py-1  ' placeholder='Search...' type="search" />
          <button className='text-white bg-[#289ee2] py-1 input_left_nav px-2  '> <FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>

        <div className='sm:w-[35%] w-[40%] flex justify-around'>

          <Link to='/likes'><FontAwesomeIcon  icon={faHeart} className='text-[#fff] fa-2x' /></Link>

          <div>
            <FontAwesomeIcon onClick={userHandler} icon={faUser} className='fa-2x text-white' />
          {user && <div className='absolute w-[100px] ml-[-30px] text-center py-3 bg-[#289ee2]'>
              <p className='text-white'>Login</p>
              <p className='text-white'>Register</p>
            </div>}
          </div>
          <Link to='/basket'><FontAwesomeIcon icon={faCartShopping} className='fa-2x text-white' /></Link>
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