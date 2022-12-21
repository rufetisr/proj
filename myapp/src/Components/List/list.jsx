import React from 'react'
import "./list.css";
import { Link } from "react-router-dom"
import { useState } from 'react';
import { useRef } from 'react';


const list = ({ obj, setObj }) => {
    let [isActive, setActive] = useState("true");
    let [value, setValue] = useState();

    let listInput = useRef();
    let textChange = (e) => {
        e.target.value != "" ? setActive(false) : setActive(true);
    }

    let goToList = () => {
        if (listInput.current.value.length != 0) {
            console.log(listInput.current.value);
        }
        setValue(listInput.current.value.length);
    }

    let Delete = (item) => {
        let index = obj.indexOf(item);
        console.log(index);
        let newArr = obj.splice(index, 1);
        setObj(newArr);
    }

    return (
        <div className='list'>
            <input ref={listInput} onChange={textChange} type="text" placeholder='List adini daxil edin' />
            <ul className='favourite-list' >
                {
                    obj.map((item) => {
                        return (
                            <div style={{ display: "flex" }}>
                                {
                                    item.Title ? <li key={item.Title}> {item.Title} ({item.Year})</li>
                                        : null
                                }
                                {
                                    item.Title ?
                                        <button onClick={() => { Delete(item) }} disabled={false}>X</button>
                                        : null
                                }
                            </div>
                        )
                    })

                }
            </ul>
            {

                value > 0 ? <Link to="/List">Go to</Link> : <button onClick={goToList} disabled={isActive}>Save list</button>
            }
        </div>
    )
}

export default list