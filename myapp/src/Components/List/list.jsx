import React from 'react'
import "./list.css"
const list = () => {
    return (
        <div className='list'>
            <input type="text" placeholder='List adini daxil edin'/>
            <ul className='favourite-list'>

            </ul>
            <button>Save list</button>
        </div>
    )
}

export default list