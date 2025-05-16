import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get('email')
    // const password  = formData.get('password')

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // save profile info in the database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Sign Up Successfully!",
                icon: "success",
                draggable: true,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-[url(https://i.ibb.co/gLS6JfpT/1.png)] bg-contain bg-no-repeat card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" required/>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
          />
          <label className="label">Phone Number</label>
          <input
            type="number"
            name="phone"
            className="input"
            placeholder="Phone Number"
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          <button className="btn btn-neutral mt-4">Sign Up</button>
          <button className="btn btn-neutral mt-1">
            <FcGoogle size={20} className="inline mr-2" />
            Sign up With Google
          </button>
        </form>
        <p className="text-center">
          Already Have an Account?{" "}
          <Link className="hover:underline text-blue-600" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
