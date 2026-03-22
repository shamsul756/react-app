import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



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
    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>);
    return (
        <nav className='flex justify-between mx-10 mt-6'>

            <span onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden
                     absolute
                      ${open ? 'top-7': '-top-40'}
                      duration-1000
                       bg-cyan-200
                        text-black`}>
                    {
                        links
                    }
                </ul>

                <h3>my navbar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            <button>sign In</button>
        </nav >

    );
};

export default Navbar;