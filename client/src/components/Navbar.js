import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/nav.css";


const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/">My Fridge</Link>
            <ul>
                <CustomLink to='/' children='Home' />
                <CustomLink to='/signin'>Login</CustomLink>
                <CustomLink to='/register'>Register</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({to, children, ...props})  {  // use ...props to pass the any other props to the Link component
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={match? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        
    )
}


export default Navbar;