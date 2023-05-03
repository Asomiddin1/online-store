

import LazyLoad from './components/corusel';
import Navbar from './components/navbar';
import Navigator from './components/navigator';


function App() {
  return (
    <div className="container ">
    <Navbar />
    <Navigator />
     <LazyLoad />
    </div>
  );
}

export default App;
