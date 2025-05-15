import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    const {name, photo} = coffeeDetails;
    return (
        <div>
            <h1 className='font-bold text-xl'><FaArrowLeftLong className='inline' /> &nbsp;<Link to='/'>Back to home</Link></h1>
            <h1>{name}</h1>
            <img src={photo} alt="" />
        </div>
    );
};

export default CoffeeDetails;