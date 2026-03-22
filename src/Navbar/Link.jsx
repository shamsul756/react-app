import React from 'react';

const Link = ({route}) => {
    return (
     <li className=' px-5 lg:mr-10 hover:bg-cyan-900'>
        <a href={route.path}>{route.name}</a>
     </li>
    );
};

export default Link;