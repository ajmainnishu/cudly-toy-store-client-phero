import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Categories = () => {
    // toys state
    const [toys, setToys] = useState([]);
    // toys fetch from server
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [toys])

    // filter tabs
    const cars = toys.filter(toy => toy.category == 'cars')
    const bikes = toys.filter(toy => toy.category == 'bikes')
    const trucks = toys.filter(toy => toy.category == 'trucks')


    return (
        <div>
            <h2 className='text-center text-5xl pb-20'>Shop Category</h2>
            <Tabs>
                {/* tabs */}
                <TabList>
                    <div className='text-center'>
                        <Tab>Cars</Tab>
                        <Tab>Bikes</Tab>
                        <Tab>Trucks</Tab>
                    </div>
                </TabList>
                {/* sub category */}
                <TabPanel>
                    {/* cars */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            cars.map(car => <div key={car._id} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={car.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{car.toy_name}</h2>
                                    <p>Price: ${car.price}</p>
                                    <p>Rating: {car.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* bikes */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            bikes.map(bike => <div key={bike.toy_img} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={bike.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{bike.toy_name}</h2>
                                    <p>Price: ${bike.price}</p>
                                    <p>Rating: {bike.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* trucks */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            trucks.map(truck => <div key={truck.toy_img} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={truck.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{truck.toy_name}</h2>
                                    <p>Price: ${truck.price}</p>
                                    <p>Rating: {truck.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;