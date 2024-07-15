
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Gallery from './Pages/Gallery';
import GalleryCategory from './Pages/GalleryCategory';
import Product from './Pages/Product';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element={<Gallery/>}/>
           <Route path='/Women' element={<GalleryCategory banner={women_banner} category = "Women"/>}/>
           <Route path='/Men' element={<GalleryCategory banner={men_banner} category = "Men"/>}/>
           <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
           </Route>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
