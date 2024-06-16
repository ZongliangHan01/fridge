import { dividerClasses } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Navbar = () => {
  const {auth} = useAuth();
  return (
    <nav className="fixed w-full bg-blue-500  h-20 flex flex-row justify-between items-center ">
      <Link className="pl-2 font-bold text-xl" to="/">
        My Fridge
      </Link>
      {auth ? (
        <ul className="w-1/2 flex flex-row justify-around">
          <CustomLink
            className=" "
            to="/"
            children="Home"
          />
          <CustomLink
            className=" "
            to="/profile"
          >
            Profile
          </CustomLink>
        </ul>
      
      ) : (
        <ul className="w-1/2 flex flex-row justify-around">
        
        <CustomLink
          className=" "
          to="/signin"
        >
          Login
        </CustomLink>
        <CustomLink
          className=" "
          to="/register"
        >
          Register
        </CustomLink>
      </ul>
      )}
      
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  // use ...props to pass the any other props to the Link component
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={match ? "font-bold border border-2 border-blue-700 rounded-lg p-3 bg-blue-300 hover:bg-blue-700" : "rounded-lg p-3 bg-blue-300 hover:bg-blue-700"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
