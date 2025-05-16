import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const {
    name,
    price,
    photo,
    details,
    taste,
    category,
    supplier,
  } = coffeeDetails;
  return (
    <div className="px-28 bg-[url(https://i.ibb.co/q3j15yY0/11.png)] bg-cover bg-no-repeat pb-20">
      <h1 className="font-bold text-xl text-black py-6">
        <FaArrowLeftLong className="inline" /> &nbsp;
        <Link to="/">Back to home</Link>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around py-[72px] px-[185px] text-black bg-[#F4F3F0] rounded-lg">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p><b> Supplier : </b>{supplier}</p>
          <p><b> Taste : </b>{taste}</p>
          <p><b> Category : </b>{category}</p>
          <p><b> Price : </b>{price}</p>
          <p><b> Details : </b>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
