import React from 'react'
import CategoryApi from './category-api'

const Phones = () => {
  const link = '/phones'
  return (
    <div>
     <CategoryApi link={link}/>
    </div>
  )
}

export default Phones