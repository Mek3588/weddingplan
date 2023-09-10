import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { logoutRedux } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
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
  ];
  console.log(userData.image2)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="logo">
          <img src={logo} alt="" className="w-12 h-auto" />
        </div>
        <button
          className="text-xl md:hidden focus:outline-none"
          onClick={() => setNavList(!navList)}
        >
          {navList ? "Close" : "Menu"}
        </button>
        <div className="hidden md:flex space-x-4 items-center text-lg">
          {nav.map((list, index) => (
            <Link
              key={index}
              to={list.path}
              className="hover:text-green-500 font-medium"
            >
              {list.text}
            </Link>
          ))}
          {userData.email === process.env.REACT_APP_VENDOR_EMAIL && (
            <Link
              to="/Newproduct"
              className="whitespace-nowrap cursor-pointer px-2 hover:text-green-500"
            >
              New product
            </Link>
          )}
          {userData.isAuthenticated && (
            <>
              <div
                className={`relative group ${
                  menuOpen ? "text-green-500" : ""
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="cursor-pointer">More</span>
                {menuOpen && (
                  <div className="absolute z-10 mt-2 py-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Link
                      to="/budgetrack"
                      className="block px-4 py-2 hover:text-green-500"
                    >
                      Budget Track
                    </Link>
                    <Link
                      to="/payments"
                      className="block px-4 py-2 hover:text-green-500"
                    >
                      Payments
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/Product"
                className="hover:text-green-500 font-medium"
              >
                Vendors
              </Link>
              <Link
                to="/Planner"
                className="hover:text-green-500 font-medium"
              >
                Planner
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {userData.image1 ? (
            <button className="btn1" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Logout ({userData.firstName})
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn1"
            >
              <i className="fa fa-sign-out"></i> Login
            </button>
          )}
          <div
            className="text-3xl cursor-pointer w-11 h-10 rounded-full overflow-hidden drop-shadow-md"
            id="imge"
          >
            {userData.image1 ? (
              <img
                src={userData.image1}
                className="h-full w-full"
                alt="User Profile"
              />
            ) : (
              <BiUserCircle />
            )}
          </div>
          <div style={{ fontSize: "2em", marginLeft: "10px" }}>
            <BsFillArrowThroughHeartFill />
          </div>
          <div
            className="text-3xl cursor-pointer w-11 h-10 rounded-full overflow-hidden drop-shadow-md"
            id="imge"
          >
            {userData.image2 ? (
              <img
                src={userData.image2}
                className="h-full w-full"
                alt="User Profile"
              />
            ) : (
              <BiUserCircle />
            )}
          </div>
        </div>
      </div>
      {navList && (
        <div className="container md:hidden">
          <div className="bg-white border-t border-gray-200 py-2">
            <div className="flex flex-col space-y-2">
              {nav.map((list, index) => (
                <Link
                  key={index}
                  to={list.path}
                  className="hover:text-green-500 font-medium"
                  onClick={() => setNavList(false)}
                >
                  {list.text}
                </Link>
              ))}
              {userData.email === process.env.REACT_APP_VENDOR_EMAIL && (
                <Link
                  to="/Newproduct"
                  className="whitespace-nowrap cursor-pointer px-2 hover:text-green-500"
                  onClick={() => setNavList(false)}
                >
                  New product
                </Link>
              )}
              {userData.isAuthenticated && (
                <>
                  <Link
                    to="/budgetrack"
                    className="hover:text-green-500 font-medium"
                    onClick={() => setNavList(false)}
                  >
                    Budget Track
                  </Link>
                  <Link
                    to="/payments"
                    className="hover:text-green-500 font-medium"
                    onClick={() => setNavList(false)}
                  >
                    Payments
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
