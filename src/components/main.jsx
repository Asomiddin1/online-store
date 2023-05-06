import React from 'react'
import Card from './card'

const Main = () => {
   const MainOptions = {
        method: 'GET',
        url: 'https://cartify.p.rapidapi.com/products',
        headers: {
          'X-RapidAPI-Key': '486197635emsh65d92c643f4c7c0p152a85jsna33724277b9f',
          'X-RapidAPI-Host': 'cartify.p.rapidapi.com'
        }
      };

   
    return (
    <div>
   <Card MainOptions={MainOptions}/>
   
    </div>
  )
}
  export default Main
