import React from 'react';
import global from '../imagesS/global.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h3><img alt='global' src={global} />My travel journal</h3>
        </nav>
    )
}

