import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'


const Navigator = () => {
  const [modal, setModal] = useState(false)
  const [modalLogin , setModalLogin] = useState(false)

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
  //register
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  
  const registerHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = {username: name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))

		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}


  return (
    <div className='flex w-full justify-around justify-items-center py-3 bg-[#fff] border-b-2 border-b-[#717181]' >
      <div className='h-[10px] w-[30px] '>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]' ></div>

      </div>
      <h3 className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Category</h3>
      <h3  className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Contact</h3>
      <h3 onClick={() => { setModal(true) }}  className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Register</h3>
      <h3 onClick={() => { setModalLogin(true) }}  className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Login</h3>
      <h3  className='md:text-[22px]  sm:text-[17px] flex  font-semibold'>Profile</h3>
      {/* popup */}

      {modal && <div onClick={showModal} className=" fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
        <div className="w-[300px] p-4 bg-white rounded shadow-md shadow-slate-600">
          <div className=" capitalize text-center text-3xl">sing up</div>
          <form>
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="text" placeholder='enter your name'
             value={name} onChange={e => setName(e.target.value)}/>

            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="email" placeholder='enter your email' 
             value={email}  onChange={e => setEmail(e.target.value)}/>

            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="password" placeholder='enter your password'
               value={password} onChange={setPassword(e=> e.target.value)}/>
            <div className="flex justify-center">
              <button onClick={registerHandler} className=' px-5 py-2 rounded mt-2 bg-slate-800 text-white'>register</button>
          </div>
            </form>
        </div>
      </div>}
 
 
      {modalLogin && <div onClick={showModalLogin} className=" fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
        <div className="w-[300px] p-4 bg-white rounded shadow-md shadow-slate-600">
          <div className=" capitalize text-center text-3xl">Login</div>
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