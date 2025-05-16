import React, { use } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
    const {signInUser} = use(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // send sign in to firebase
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            const signInInfo = {
                email,
                lastSignInTime : result.user?.metadata?.lastSignInTime
            }
            // update last sign in to the datebase
            fetch('https://coffee-store-server-ruby-one.vercel.app/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('after update patch', data)
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
      <div className="bg-[url(https://i.ibb.co/gLS6JfpT/1.png)] bg-contain bg-no-repeat card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
        <h1 className="font-bold text-2xl text-white mb-12">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </h1>
        <div className="card-body">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Sign In</button>
            <button className="btn btn-neutral mt-1"><FcGoogle size={20} className="inline mr-2"/>Sign in With Google</button>
          </form>
          <p className="text-center">Don't Have an Account? <Link className="hover:underline text-blue-600" to="/signup">Sign Up</Link></p>
        </div>
      </div>
  );
};

export default SignIn;
