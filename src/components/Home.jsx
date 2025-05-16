import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { SlCup } from "react-icons/sl";

const Home = () => {
  const allCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(allCoffees);
  return (
    <div className="bg-[url(https://i.ibb.co/gLS6JfpT/1.png)] bg-contain bg-no-repeat h-[1200px]">
      <div className="w-full text-center space-y-3 my-8">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-6xl">Our Popular Products</h1>
        <button className="btn text-lg font-rancho bg-[#E3B577] text-black border-black border-2">
          <SlCup className="inline" /> &nbsp;<Link to="/addCoffee">Add Coffee</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[300px] w-full">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
