import React from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Proba = () => {
  return (
    <div  className="relative scaleCard sm:w-[300px] mx-auto w-[330px]  sm:h-[350px] h-[390px] mb-6 text-center bg-[rgba(224,224,224,0.95)] rounded px-6 py-[20px]">
          <img className=' w-[350px] h-[140px] object-contain  mb-[10px]' src={require('./images/2. Хаски.jpg')} alt="" />
          <FontAwesomeIcon onClick={() => {
        
          }} className={` absolute right-4 top-4 fa-2x ${ 'text-[blue]'} `} icon={faHeart} />
          <h1>kuchuk</h1>
          <span>100</span>
          <br />
          <button className='py-2 px-6 bg-[blue] mt-4 rounded w-[100%] text-[white] '>Buy</button>
          <button className='mt-3 border w-full py-1 text-[blue] rounded border-[blue]' >Buy one click</button>
        </div>
  )
}

export default Proba