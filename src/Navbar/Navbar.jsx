import { list } from 'postcss';
import React from 'react';
import Link from './Link';

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About Us',
            path: '/about'
        },
        {
            id: 3,
            name: 'Services',
            path: '/services'
        },
        {
            id: 5,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 6,
            name: 'Blog',
            path: '/blog'
        }
    ];


    return (
        <nav>
            <ul className='flex'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul > */}
        </nav >
    );
};

export default Navbar;