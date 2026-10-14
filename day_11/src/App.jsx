import React, { useState,useEffect } from 'react'
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';

import {
  BrowserRouter ,Route,Routes } from 'react-router-dom';
import Home from "./Component/Home
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cart element={<Cart />}></Route
          "></Route>
        </Routes>
      
      </BrowserRouter>
      <Header />
      <Product products={products}/>
      <Footer />
    </div>
  )
}

export default App