
import LazyLoad from './components/corusel';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Navigator from './components/navigator';
import { Routes, Route } from 'react-router-dom';
import Phones from './components/Phones';
import SmartWatch from './components/smartWatch';
import HomeAplinces from './components/homeAplinces';
import Main from './components/main';
import LikeCards from './components/like-cards';
import Korzina from './components/korzina';


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
           <Routes>
             <Route path='/' element={<Main />} />
             <Route path='/phones' element={<Phones />} />
             <Route path='/watches' element={<SmartWatch />} />
             <Route path='/homeAplinces' element={<HomeAplinces />} />
             <Route path='/likes' element={<LikeCards />} />
             <Route path='/basket' element={<Korzina />} />
           </Routes>
        <Footer />  

        </div>

      </div>

    </div>
  );
}

export default App;
