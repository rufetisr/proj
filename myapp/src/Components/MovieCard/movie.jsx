import React from 'react';
import "./movie.css";

const movie = (props) => {
    let {img, title, type, year, id} = props;
  return (
    <li key={id}>
      <img src={img} alt="img" />
      <div>
        <h3>{`${title} (${year})`}</h3>
        <button>Add list</button>
      </div>
    </li>
  );
}

export default movie;
