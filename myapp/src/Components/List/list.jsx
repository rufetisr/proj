import React from 'react'
import "./list.css";
import { Link } from "react-router-dom"
import { useState } from 'react';


const list = ({ obj, setObj }) => {
    let [isActive, setActive] = useState("true");
    // useEffect(() => {
    //     setData(ul.current);
    //     console.log(ul.current);
    // }, []);

    let textChange = (e) => {
        e.target.value != "" ? setActive(false) : setActive(true);
    }

    return (
        <div className='list'>
            <input onChange={textChange} type="text" placeholder='List adini daxil edin' />
            <ul className='favourite-list' >
                {
                    obj.map((item) => {
                        return (
                            <div style={{display: "flex"}}> 
                                {
                                    item.Title ? <li key={item.Title}><Link to="/List"> {item.Title} ({item.Year})</Link></li>
                                        : null
                                }
                                {
                                     item.Title ?
                                    <button disabled={false}>X</button>
                                    :null
                                }
                            </div>
                        )
                    })

                }
            </ul>
            <button disabled={isActive}>Save list</button>
        </div>
    )
}

export default list