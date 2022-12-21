import React from 'react';
import "./movie.css";

let arr = [];
const movie = (props) => {
    let { img, title, type, year, id, obj, setObj} = props;
    // let arr = [];
    let Click = () => {

        // ul-i tap, li-yw title-i add et
        
        // arr.push(id1.map(item=>{
        //     return item
        // }));
        if (!arr.includes(id, 0)) {
            arr.push(id);
            setObj
                (
                    [
                        ...obj,
                        {
                            Poster: img,
                            Type: type,
                            Title: title,
                            Year: year,
                            imdbID: id,
                        }]
                )
        }
        console.log(obj);
        // if (!arr.includes(id, 0)) {
        //     let li = document.createElement("li");
        //     li.innerHTML = `${title} (${year})`;
        //     props.data.append(li);
        //     arr.push(id);
        // }
        //   console.log(arr);

    }
    return (
        <li key={title} className="movie" >
            {
                img == 'N/A' ?
                    <div style={{ backgroundColor: "#d3d3d3", width: "120px", height: "150px", marginRight: "21px", display: "flex", alignItems: "center", justifyContent: "center", flex: "1" }}>
                        <span>No poster</span>
                    </div> :
                    <img src={img} />
            }
            <div style={{ flex: "1" }}>
                <h3>{`${title} (${year})`}</h3>
                <button onClick={Click} style={{ width: "60%" }}>Add list</button>
            </div>
        </li>
    );
}

export default movie;
