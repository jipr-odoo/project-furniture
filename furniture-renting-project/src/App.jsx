import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FurnitureProduct from './furnitureComponent/FurnitureProduct';
import UserNavbar from './navbarComponent/UserNavbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  
  return (
    <>
      <Provider store={store}> 
      <BrowserRouter>
        <UserNavbar/>
        <Routes>
          <Route path="/" element={<FurnitureProduct/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
