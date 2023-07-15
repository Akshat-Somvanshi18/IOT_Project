import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import ShowReport from './Components/ShowReport';

function App() {
  return (
   <>

   <Router>
    <Routes>
      <Route exact path='/' element={<><Navbar/><Section1/><Section2/><Section3/><Section4/><Section6/><Section5/></>}/>
      <Route exact path='/show-report' element={<><ShowReport/></>}/>
    </Routes>
   </Router>
   

   </>
  );
}

export default App;
