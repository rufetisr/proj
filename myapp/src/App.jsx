import Header from './Components/Header/header'
import Form from './Components/Form/form'
import "./App.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import List from "./Pages/List"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/List' element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
