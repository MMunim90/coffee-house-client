import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const allCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(allCoffees)
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-[300px]'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;