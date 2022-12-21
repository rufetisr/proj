import React from 'react'
import { useState } from 'react'
import { getMovieData } from '../../Services/db'
import "../Form/form.css";
import Movie from "../MovieCard/movie"


const Form = ({ obj, setObj, id, setId }) => {
  const [data, setData] = useState([]);

  let getFilms = async (e) => {
    e.preventDefault();
    // console.log(e.target.movie.value);
    let result = await getMovieData(e.target.movie.value);
    setData(result);
    console.log("result",result);
  }

  return (
    <div className='left'>
      <form onSubmit={getFilms} className="form">
        <label>Search films</label>
        <div className="searchbox">
          <input name='movie' type="text" placeholder='Example, Spiderman' required />
          <button type='submit'>Search</button>
        </div>
      </form>
      <ul>
        {
          data?.map(item => {
            return (
              <>
                <Movie obj = {obj} setObj = {setObj} img={item.Poster} title={item.Title} type={item.Type} year={item.Year} id={item.imdbID}/>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Form;