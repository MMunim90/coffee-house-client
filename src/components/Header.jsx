import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="navbar bg-[url(https://i.ibb.co/bg0mzdRT/15.jpg)] bg-contain shadow-sm pl-[236px]">
      <div className="w-full flex items-center justify-center gap-6">
        <img
          className="w-[70px] h-[85px]"
          src="https://i.ibb.co/tVNbVRQ/logo1.png"
          alt=""
        />
        <h1 className="text-4xl">Espresso Emporium</h1>
      </div>
      <div className="flex gap-6 mr-16">
        <button className="btn btn-outline btn-warning"><Link to="/signup">Sign Up</Link></button>
        <button className="btn btn-warning"><Link to="/signin">Sign In</Link></button>
      </div>
    </div>
  );
};

export default Header;
