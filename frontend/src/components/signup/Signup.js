import React, { useState } from "react";
import loginImage1 from "../images/bride.jpg";
import loginImage2 from "../images/groom.jpg";
import { BiSolidShow,BiSolidHide} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import signupBackground from "../images/signupbackground.gif"
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";



function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image1: "",
    image2:""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage1 = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])


    setData((preve)=>{
        return{
          ...preve,
          image1 : data
        }
    })

}

const handleUploadProfileImage2 = async(e)=>{
  const data = await ImagetoBase64(e.target.files[0])


  setData((preve)=>{
      return{
        ...preve,
        image2 : data
      }
  })

}


console.log(process.env.REACT_APP_SERVER_DOMIN)
const handleSubmits = async(e) => {
  e.preventDefault();
  const { firstName, email, password, confirmPassword } = data;
  if (firstName && email && password && confirmPassword) {
    if (password === confirmPassword) {
  
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })

        const dataRes = await fetchData.json()
  

      

      //toast(dataRes.message)
      if(dataRes.alert){
        navigate("/login");
      }
     
    } else {
      alert("password and confirm password not equal");
    }
  } else {
    alert("Please Enter required fields");
  }
};




  return (
    <div className="sign-up-form-container bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${signupBackground})`}}
     >
    <div className="p-6 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md shadow-md relative ml-2">
         <img src={data.image1 ? data.image1 :  loginImage2} className="w-full h-full" />
          <label htmlFor="profileImage1">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage1" accept="image/*" className="hidden" onChange={handleUploadProfileImage1} />
          </label>

       </div>
       <div className="ml-12">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
        <img src={data.image2 ? data.image2 :  loginImage1} className="w-full h-full" />
          <label htmlFor="profileImage2">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage2" accept="image/*" className="hidden" onChange={handleUploadProfileImage2} />
          </label>
        </div>
      </div>
      </div>


       <form  onSubmit={handleSubmits} className="w-full py-4 flex flex-col space-y-3" >
       <div>
            <label htmlFor="firstName" className="text-sm text-gray-600">
              Bride Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full bg-slate-200 px-2 py-1 rounded focus:outline-pink-300"
              value={data.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Groom Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-slate-200 px-2 py-1 rounded focus:outline-pink-300"
              value={data.lastName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-200 px-2 py-1 rounded focus:outline-pink-300"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full bg-slate-200 border-none px-2 py-1 rounded focus:outline-pink-300"
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm text-gray-600">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-slate-200 border-none px-2 py-1 rounded focus:outline-pink-300"
                value={data.confirmPassword}
                onChange={handleOnChange}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
          </div>
          <button className="w-full max-w-[200px] mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 cursor-pointer text-white text-xl font-semibold text-center py-2 rounded-full mt-4 transition-all transform hover:scale-105" type="submit">
      Sign Up
    </button>
    </form>
    <p className="text-center text-sm mt-4">
      <span className="text-gray-600">Already have an account? </span>
      <Link to="/login" className="text-red-500 underline font-semibold hover:text-red-600">
        Login
      </Link>
    </p>


          
      
    </div>
    </div>
    </div>
  );
}

export default Signup;
