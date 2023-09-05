import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "./logo.png";
import { logoutRedux } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi"

const Header = () => {
  const [navList, setNavList] = useState(false);
  const navigate = useNavigate(); 

  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logged out successfully");
  };
  

  const nav = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "services",
      path: "/services",
    },
    {
      text: "blog",
      path: "/blog",
    },
    {
      text: "pricing",
      path: "/pricing",
    },
    {
      text: "contact",
      path: "/contact",
    },
    {
      text: "Budget Track",
      path: "/budgetrack", 
    },
    {
      text: "payments",
      path: "/payments", 
    },
    {
      text: "Vendors",
      path: "/Product", 
    },
    {
      text: "planner",
      path: "/Planner",
    },

  ];

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              {userData.email === process.env.REACT_APP_VENDOR_EMAIL && (
                <li>
                  <Link to="/Newproduct" className="whitespace-nowrap cursor-pointer px-2">
                    New product
                  </Link>
                  
                </li>
              )}
            
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            {userData.image1 ? (
              <button
                className="btn1"
                onClick={handleLogout}
                    >
                      <i className="fa fa-sign-out"></i>
                      Logout ({userData.firstName})
                    </button>
                  ) : (
                    <button
                    onClick={() => {
                      navigate('/login');
                    }}
                    className="btn1"   >
                      <i className="fa fa-sign-out"></i>
                      Login
                    </button>
                  )}
            <div className="text-3xl cursor-pointer w-11 h-10 rounded-full overflow-hidden drop-shadow-md" id="imge">
              {userData.image1 ? (
                <img src={userData.image1} className="h-full w-full" />
              ) : (
                <BiUserCircle />
              )}
            </div>
            <div style={{ fontSize: '2em', marginLeft: '10px' }}>
              <BsFillArrowThroughHeartFill />
            </div>
            <div className="text-3xl cursor-pointer w-11 h-10 rounded-full overflow-hidden drop-shadow-md" id="imge">
              {userData.image2 ? (
                <img src={userData.image2} className="h-full w-full" />
              ) : (
                <BiUserCircle />
              )}
            </div>
          
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
