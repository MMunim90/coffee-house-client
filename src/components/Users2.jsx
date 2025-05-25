import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router";

const Users2 = () => {

    const {isPending, isError, error, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://coffee-store-server-ruby-one.vercel.app/users');
            return res.json();
        }
    })

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://coffee-store-server-ruby-one.vercel.app/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-ruby-one.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              //   const remainingUsers = users.filter((user) => user._id !== id);
              //   setUsers(remainingUsers);
              //   Swal.fire({
              //     title: "Deleted!",
              //     text: "User has been deleted.",
              //     icon: "success",
              //   });
            }
          });
      }
    });
  };

  if(isPending){
    return <span className="loading loading-ring loading-xl"></span>
  }

  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div className="mt-6 px-28">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-white">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </h1>
        {/* <h2 className="text-3xl text-center">Users: {users.length}</h2> */}
      </div>

      <div className="overflow-x-auto my-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Last Signin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.lastSignInTime}</td>
                <th className="space-x-2">
                  <button className="btn btn-xs">
                    <FaRegEye size={20} />
                  </button>
                  <button className="btn btn-xs">
                    <MdEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs"
                  >
                    <AiFillDelete size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
