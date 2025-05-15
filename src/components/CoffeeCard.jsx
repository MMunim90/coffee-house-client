import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, quantity, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
    
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been deleted.`,
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffee = coffees.filter(del => del._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 p-3">
      <figure>
        <img src={photo} alt="Coffee Photo" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div>
          <h2 className="text-2xl">Name: {name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <Link to={`/coffee/${_id}`}>
            <button className="btn join-item">
              <FaRegEye />
            </button>
            </Link>
            <Link to={`updateCoffee/${_id}`}>
            <button className="btn join-item">
              <MdEdit />
            </button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
