import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-transparent  text-black">
        <div className="navbar-start ml-20">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Skills">Skills</a>
              </li>
              <li>
                <a href="/Projects">Projects</a>
              </li>
              <li>
                <a href="/Contacts">Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="/"><img src="logobaru.jpg" alt="logo" className="w-28"  /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
              </li>
            <li>
              <a href="/Skills">Skills</a>
            </li>
            <li>
              <a href="/Projects">Projects</a>
            </li>
            <li>
              <a href="/Contacts">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-20 gap-4">
          <a href="https://www.facebook.com/farhan.wildan.3" className="btn"><FaFacebook/></a>
          <a href="https://www.instagram.com/wildan312" className="btn"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/farhan-wildan-52b490256" className="btn"><FaLinkedin/></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
