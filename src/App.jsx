

import { Router } from 'react-router-dom';
import Card from './components/card';
import LazyLoad from './components/corusel';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Navigator from './components/navigator';


function App() {



  return (
   <div className='mx-auto max-w-[1800px]'>
 
     <div className="w-full absolute mx-auto max-w-[1800px]">
    <div className='top-0 fixed mx-auto max-w-[1800px] w-full z-50'>
    <Navbar />
    <Navigator /> 
    
    </div>
    
    <div className='w-full relative top-[156px]  sm:top-[108px]'> 
   <LazyLoad />
     <Card />
     <Footer />
    </div>

     <div className='w-full '>

     </div>
    </div>

   </div> 
    );
  }

export default App;
