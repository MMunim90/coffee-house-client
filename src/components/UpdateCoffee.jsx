import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const {
    _id,
    name,
    price,
    quantity,
    photo,
    details,
    taste,
    category,
    supplier,
  } = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            imageUrl: photo,
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Coffee Photo",
            icon: "success",
            title: "Great!",
            text: `Update ${name} Details Successfully`,
            draggable: true
          });
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="font-bold text-xl">
        <FaArrowLeftLong className="inline" /> &nbsp;
        <Link to="/">Back to home</Link>
      </h1>
      <div className="p-20 text-center space-y-4">
        <h1 className="text-6xl">Update Existing Coffee Details</h1>
        <p>
          Modify the details of an existing coffee to keep the menu accurate and
          up to date. Adjust the name, origin, flavor notes, or pricing as
          needed to reflect the latest changes
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              className="input w-full"
              placeholder="Enter Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input w-full"
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter Photo URL"
            />
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn w-full mt-6"
          value="Update Coffee Details"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
