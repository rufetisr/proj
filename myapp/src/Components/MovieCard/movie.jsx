import React from 'react';
import { useRef } from 'react';
import "./movie.css";

const movie = (props) => {
    let { img, title, type, year, id } = props;
    return (
        <li key={id} className="movie" >
            {
                img == 'N/A' ?
                    <div style={{ backgroundColor: "#d3d3d3", width: "120px", height: "150px", marginRight: "21px",display: "flex", alignItems: "center", justifyContent: "center", flex:"1"}}>
                        <span>No poster</span>
                    </div> :
                    <img src={img} />
            }
            <div style={{flex:"1"}}>
                <h3>{`${title} (${year})`}</h3>
                <button style={{width: "60%"}}>Add list</button>
            </div>
        </li>
    );
}

export default movie;
