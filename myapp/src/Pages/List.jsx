import React from 'react';
import { useLocation } from 'react-router-dom';
import "./List.css"
const List = () => {

  const stateParamValue = useLocation().state;

  let url = "https://m.imdb.com/title/";
  // const location = useLocation();
  // const obj = location.state;
  // const { type }= useParams();
  // console.log(stateParamValue);
  return (
    <div className='links'>
      <h1>My list </h1>
      <ul>
        {
          stateParamValue.map((item) => {
            return (
             <a href={url+`${item.imdbID}`}> <li>{item.Title} ({item.Year})</li></a>
            )
          })
        }
      </ul>
    </div>
  );
}

export default List;
