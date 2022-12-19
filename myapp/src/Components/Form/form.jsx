import React from 'react'
import { useState } from 'react'
import { getMovieData } from '../../Services/db'
import "../Form/form.css"
const Form = () => {

  const [data, setData] = useState([]);

  let getFilms = async (e) => {
    e.preventDefault();
    console.log(e.target.movie.value);
    let result = await getMovieData(e.target.movie.value);
    setData(result);
  }

  return (
    <>
      <form onSubmit={getFilms} className="form">
        <label>Search films</label>
        <div className="searchbox">
          <input name='movie' type="text" placeholder='Example, Spiderman' />
          <button type='submit'>Search</button>
        </div>
      </form>
      <ul>
        {
          data.map(item => {
             return ( 
              <>
             <li>{item.Title}</li>
              </>
             )
          })
        }
      </ul>
    </>
  )
}

export default Form;