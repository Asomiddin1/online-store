import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons';
import Proba from './proba';
import CategoryApi from './category-api';


const SmartWatch = () => {
const link = '/Smartwatches'
  
return (
  <div>
    <CategoryApi link={link}/>
  </div>
)
}

export default SmartWatch


