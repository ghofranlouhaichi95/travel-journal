import React from 'react';
import global from '../imagesS/global.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img alt='global' src={global} />
            <h3>My travel journal</h3>
        </nav>
    )
}

