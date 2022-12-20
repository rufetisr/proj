import Header from './Components/Header/header'
import Form from './Components/Form/form'
import "./App.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import List from "./Pages/List"
function App() {
  // const [data, setData] = useState();
  // const [title, setTitle] = useState();
  // const [obj, setObj] = useState([{
  //   // Poster: "",
  //   Title: "",
  //   Year: "",
  //   imdbID: "",
  // }]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="container">
          <Header />
          <main className='main'>
            <Form data1={data} setData1={setData} title={title} setTitle={setTitle} obj={obj} setObj={setObj} />
            <List data={data} setData={setData} title={title} setTitle={setTitle} obj={obj} setObj={setObj} />
          </main>
        </div> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/List' element={<List/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
