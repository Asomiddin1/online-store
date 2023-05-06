import React from 'react'

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur' >
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading