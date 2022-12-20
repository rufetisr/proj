import React from 'react'
import "./list.css";
import { useRef, useEffect } from 'react';
import {Link } from "react-router-dom"
const list = ({ data, setData, title, setTitle, obj, setObj }) => {
    let ul = useRef();

    useEffect(() => {
        setData(ul.current);
        console.log(ul.current);
    }, []);

    return (
        <div className='list'>
            <input type="text" placeholder='List adini daxil edin' />
            <ul className='favourite-list' ref={ul}>
                {
                    obj.map((item) => {
                        return (
                          item.Title  ? <li><Link to="/List"> {item.Title} ({item.Year})</Link></li> : null
                        )
                    })

                }
            </ul>
            <button>Save list</button>
        </div>
    )
}

export default list