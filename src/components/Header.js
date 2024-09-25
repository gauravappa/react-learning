import React from "react";

const Header = (props) => {
  return (
    <div className="px-24 py-1 bg-gradient-to-b from-black  flex items-center justify-between absolute w-lvw bg-transparent z-10 max-sm:justify-center">
      <img className="h-[5.5rem]" alt="logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      <button className="bg-red-500 px-4 py-1.5 h-fit text-white rounded-md font-semibold max-sm:hidden">Sign In</button>
    </div>
  )
};

export default Header;
