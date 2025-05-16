import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // send coffee data to the database
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log('added successfully!');
          Swal.fire({
            title: "Coffee added successfully!!!",
            icon: "success",
            draggable: true,
          });
          form.reset()
        }
      });
  };
  return (
    <div className="p-28 bg-[url(https://i.ibb.co/q3j15yY0/11.png)] bg-cover bg-no-repeat pb-20 text-black">
      <h1 className='font-bold text-xl'><FaArrowLeftLong className='inline' /> &nbsp;<Link to='/'>Back to home</Link></h1>
      <div className="p-20 text-center space-y-4">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          Fill in the details below to add a new coffee to the menu. Include the
          name, origin, flavor notes, and price to help customers discover their
          next favorite brew.
        </p>
      </div>
      <form onSubmit={handleAddCoffee} className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="input w-full"
              placeholder="Enter Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Price</label>
          <input
            type="number"
            name="price"
            className="input w-full"
            placeholder="Enter Coffee Price"
          />
        </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        </div>

        <input type="submit" className="btn w-full mt-6 bg-[#D2B48C] font-rancho text-lg border-black border-2" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
