import Header from '../Components/Header/header'
import Form from '../Components/Form/form'
import List from '../Components/List/list'
import "../App.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [obj, setObj] = useState([{
    // Poster: "",
    Title: "",
    Year: "",
    imdbID: "",
  }]);

  return (
        <div className="container">
          <Header />
          <main className='main'>
            <Form data1={data} setData1={setData} title={title} setTitle={setTitle} obj={obj} setObj={setObj} />
            <List data={data} setData={setData} title={title} setTitle={setTitle} obj={obj} setObj={setObj} />
          </main>
        </div>
  )
}

export default Home;