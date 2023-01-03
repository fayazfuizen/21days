import React from 'react';
import "./App.css"
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div>
     <Navbar/>
     <div className='app__body'>
      <Sidebar/>
      <Body/>
     </div>
   </div>
    
  );
}

export default App;
