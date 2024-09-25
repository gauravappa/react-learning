import React from "react"
import { Outlet } from "react-router-dom";


const Body = (props) => {

   

  return (
   <div className="absolute top-0 w-full">
    <img className="-z-10 min-w-[1650px] max-md:object-fill " alt="netflix movie backgroud" src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"/> 
    <Outlet />
   </div>
  )
};

export default Body;
