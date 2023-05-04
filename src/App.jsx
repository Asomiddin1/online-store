

import Card from './components/card';
import LazyLoad from './components/corusel';
import Navbar from './components/navbar';
import Navigator from './components/navigator';


function App() {



  return (
    <div className="w-full absolute">
    <div className='top-0 fixed w-full z-50'>
    <Navbar />
    <Navigator />
    </div>
    
    <div className='w-full relative top-[128px]  sm:top-[108px]'> 
    <LazyLoad />
     <Card />
    </div>

     <div className='w-full h-[1000px]'>
ere
     </div>
    </div>
  );
  }

export default App;
