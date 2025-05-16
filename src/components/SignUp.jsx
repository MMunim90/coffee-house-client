import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
  return (
        <div className="bg-[url(https://i.ibb.co/gLS6JfpT/1.png)] bg-contain bg-no-repeat card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sign Up</button>
              <button className="btn btn-neutral mt-1"><FcGoogle size={20} className="inline mr-2"/>Sign up With Google</button>
            </form>
            <p className="text-center">Already Have an Account? <Link className="hover:underline text-blue-600" to="/signin">Sign In</Link></p>
          </div>
        </div>
  );
};

export default SignUp;
