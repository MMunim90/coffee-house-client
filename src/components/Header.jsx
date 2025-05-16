import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="navbar bg-[url(https://i.ibb.co/bg0mzdRT/15.jpg)] bg-contain shadow-sm lg:pl-72">
      <div className="w-full flex items-center justify-center gap-6">
        <img
          className="w-[60px] h-[70px]"
          src="https://i.ibb.co/tVNbVRQ/logo1.png"
          alt=""
        />
        <h1 className="text-4xl">Espresso Emporium</h1>
      </div>
      <div className="flex gap-6 mr-16">
        <button className="btn btn-outline btn-warning">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="btn btn-warning">
          <Link to="/signin">Sign In</Link>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/F4BxGnK2/user.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <li>
              <a>User : </a>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
