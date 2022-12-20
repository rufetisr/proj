import React from 'react';
import "./movie.css";

const movie = (props) => {
    let { img, title, type, year, id, title1, setTitle, obj, setObj } = props;
    let arr = [];
    let Click = () => {

        // ul-i tap, li-yw title-i add et
        // setTitle(`${title} (${year})`);
        // console.log(props.data);
        // console.log(title1);
        if (!arr.includes(id, 0)) {
            arr.push(id);
            setObj([
                ...obj,
                {
                    Title: title,
                    Year: year,
                    imdbID: id,
                }])
        }

        console.log(obj);
        console.log(arr);
        // if (!arr.includes(id, 0)) {
        //     let li = document.createElement("li");
        //     li.innerHTML = `${title} (${year})`;
        //     props.data.append(li);
        //     arr.push(id);
        // }
        //   console.log(arr);

    }
    return (
        <li key={id} className="movie" >
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
