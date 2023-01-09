import React from 'react';
import "./App.css"
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
// import Compose from './Components/Compose/Compose';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Primary from './Components/primetype/Primary';
import Social from './Components/primetype/Social';
import Promotions from './Components/primetype/Promotions';
// import {Theme} from './Components/Theme'



function App() {
  
  return (
    <div>
     
     {/* className='app__body' */}
     <div className='positiondiv'>
    
      <BrowserRouter>
     
      <Navbar/>
      <Sidebar/>
    
      <Routes>
        <Route path='/' element={<Body/>}/>
        {/* <Route path="/Compose" element={<Compose/>}/> */}
        <Route path='/Primary' element={<Primary/>}/> 
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Promotions' element={<Promotions/>}/>
       
      </Routes>
     
         
     </BrowserRouter>
    
     </div>
    
   </div>
    
  );
}

export default App;
