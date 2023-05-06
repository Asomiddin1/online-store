import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
// import AuthService from '../service/auth'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navigator = () => {
  const [modal, setModal] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [menu, setMenu] = useState(false)

  const showModal = (e) => {
    if (e.target.className.includes('fixed top-0')) {
      setModal(false)
    }
  }

  const showModalLogin = (e) => {
    if (e.target.className.includes('fixed top-0')) {
      setModalLogin(false)
    }
  }



  const showMenu = (e) => {
    e.stopPropagation()
    setMenu(prev => !prev)

  }

  //register
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const registerHandler = async e => {
    e.preventDefault()

    if (name.length < 8) {
      alert(`The username can't be less than 8 characters.`)
    }
    const options = {
      method: 'POST',
      url: 'https://cartify.p.rapidapi.com/users',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '486197635emsh65d92c643f4c7c0p152a85jsna33724277b9f',
        'X-RapidAPI-Host': 'cartify.p.rapidapi.com'
      },
      data: {
        email,
        password,
        username: name,
      }
    };

    try {
      const response = await axios.request(options);
      const data = await response.data;
      console.log(data);



      if (response.data) {
        setModal(false)
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className='flex w-full sm:justify-around  sm:justify-items-center  justify-end py-3 bg-[#fff] border-b-2 border-b-[#717181]' >
      <div className='munna h-[10px] w-[30px]' onClick={showMenu}>
        <div className='munna  h-[5px] bg-black mt-1 rounded-[2px]' ></div>
        <div className='munna h-[5px] bg-black mt-1 rounded-[2px]' ></div>
        <div className='munna h-[5px] bg-black mt-1 rounded-[2px]'></div>

      </div>
      <div className='sm:block hidden w-[50%]'>
      <div className='flex justify-between '>
      <Link to='/phones'><h3 className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Phones</h3></Link>
        <h3 className='md:text-[22px]  sm:text-[17px] flex  font-semibold'><Link to='/watches'>Smartwatches</Link></h3>
        <Link to='/homeAplinces'>      <h3 className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Home Appliances</h3></Link>
      </div>
      </div>

      <div className='flex sm:w-[20%]  w-[60%] sm:justify-between  justify-end sm:gap-0  gap-[5%]'>
      <h3 onClick={() => { setModal(true) }} className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Register</h3>
      <h3 onClick={() => { setModalLogin(true) }} className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Login</h3>

      </div>
      {/* menu */}
      {menu && <div onClick={showMenu} className='munna fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur'>
        <div className='left-0 fixed  top-0 bottom-0 w-[300px] bg-white  pl-6'>
          <div className='munna px-[10px] py-6 flex justify-between'>
            <FontAwesomeIcon onClick={showMenu} className='munna fa-2x' icon={faX} />
            <FontAwesomeIcon className='fa-2x' icon={faUser} />
          </div>
          <p>Category</p>
          <p>Home</p>
        </div>
      </div>}
      {/* popup */}

      {modal && <div onClick={showModal} className=" fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
        <div className="w-[300px]  sm:w-[500px]  pt-[4%] sm:h-[400px] p-4 bg-white rounded shadow-md shadow-slate-600">
          <div className=" capitalize text-center justify-items-center font-semibold mb-3 text-3xl">sing up</div>
          <form>
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="text" placeholder='enter your name'
              value={name} onChange={e => setName(e.target.value)} />

            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="text" placeholder='enter your email'
              value={email} onChange={e => setEmail(e.target.value)} />

            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="password" placeholder='enter your password'
              value={password} onChange={e => setPassword(e.target.value)} />
            <div className="flex justify-center">
              <button onClick={registerHandler} className=' px-5 py-2 rounded mt-2 bg-slate-800 text-white'>
                register
              </button>
            </div>
          </form>
        </div>
      </div>}


      {modalLogin && <div onClick={showModalLogin} className=" fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
        <div className="w-[300px]  sm:w-[500px]  pt-[4%] sm:h-[350px] p-4 bg-white rounded shadow-md shadow-slate-600">
          <div className=" capitalize text-center text-3xl mb-3">Login</div>
          <form>
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="email" placeholder='enter your email' />
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="password" placeholder='enter your password' />
            <div className="flex justify-center">
              <button className=' px-5 py-2 rounded mt-2 bg-slate-800 text-white'>Login</button>
            </div>
          </form>
        </div>
      </div>}

    </div>
  )
}

export default Navigator