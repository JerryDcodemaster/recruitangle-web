import React from 'react';
import { Button, ButtonGroup, HStack } from '@chakra-ui/react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container px-0 py-3 nav d-flex justify-content-between align-items-center">
            <img className='logo' src="./images/logo.png" alt="" />


            <ul className='header-links'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
                <CustomLink to="/expert">Join as Expert</CustomLink>
            </ul>

            <div className="d-flex justify-content-center gap-1">
               <button className='sign-in'><a className='a-1' href="#!">Sign in</a></button>
               <button className='join-now'><a className='a-2' href="#!">Join now</a></button>
            </div>

        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li>
            <Link className={isActive ? "active" : ""} to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Header