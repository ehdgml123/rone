
import './App.css';
import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';

import data1 from './db/langue';
import data2 from './db/langue1';
import Header from './components/Header';
import Navber from './components/Navber';
import Subslide from './components/Subslide';
import Mainpro from './components/Mainpro';
import Rolke from './components/Rolke';
import Grid from './components/Grid';
import Footer from './components/Footer';
import Cart from './components/Cart';

// 상세페이지
import Detail from './components/Detail';
import Detail1 from './components/Detail1';

function App() {
  let [langue] = useState(data1);
  let [langue1] = useState(data2);
   
  return(
    <div className="main_wrap">
    {/* header*/}
    <Header />

    <Navber />

  
  
    <Routes>
      <Route path="/"
       element={
      <div>
    <Subslide />

    <Mainpro />
    
    <Rolke />

    <Grid />
    </div> 
       }
    />

    <Route path="/detail/:id" element={<Detail langue={langue} />} />
    <Route path="/detail1/:id" element={<Detail1 langue1={langue1} />} />
    <Route path="/Cart" element={<Cart/>}/>

    </Routes>
    

    <Footer />
  </div>
  )
     
}

export default App;
