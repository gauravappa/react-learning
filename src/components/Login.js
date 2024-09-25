import React,{useState} from "react"

const Login = (props) => {
  const [isSignIn,setIsSignIn] = useState(true);

  return (
    <div className="absolute top-0 h-full w-full flex justify-center items-center">
    <div className="px-16 py-12 h-4/6  bg-black bg-opacity-75 flex flex-col">
      <h1 className="text-4xl font-semibold text-white my-4">{isSignIn?"Sign In":"Sign Up"}</h1>
      <form className=" flex flex-col">
      {!isSignIn && <input type="text" placeholder="Full Name" className="px-4 py-3 my-3 w-72 rounded-md bg-gray-900 bg-opacity-65 border border-gray-500 text-gray-100"/>}
      <input type="email" placeholder="Email Address" className="px-4 py-3 my-3 w-72 rounded-md bg-gray-900 bg-opacity-65 border border-gray-500 text-gray-100"/>
      <input type="password" placeholder="Password" className="px-4 py-3 my-3 w-72 rounded-md bg-gray-900 bg-opacity-65 border border-gray-500 text-gray-100"/>
      <button type="submit" className="px-2 py-3 rounded-md bg-red-500 w-72 text-white my-3">{isSignIn?"Sign In":"Sign Up"}</button>
      </form>
      <p className="text-white font-thin ps-1 py-5">{isSignIn?"New to Netflix? ":"Existing User? "} <b className="hover:underline cursor-pointer font-semibold" onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn?"Sign up now":"Sign In"}</b></p>
    </div>
    </div>
  )
};

export default Login;
