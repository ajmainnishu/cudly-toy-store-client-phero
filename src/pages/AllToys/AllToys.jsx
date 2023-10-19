import { useEffect, useState } from "react";

const AllToys = () => {
    // toys state
    const [allToys, setAllToys] = useState([]);
    // toys fetch from server
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-20">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            allToys.map(toy => <tr key={toy._id} className="text-center">
                                <td className="capitalize">{toy.seller_name}</td>
                                <td className="capitalize">{toy.toy_name}</td>
                                <td className="capitalize">{toy.category}</td>
                                <td className="capitalize">{toy.price}</td>
                                <td className="capitalize">{toy.quantity}</td>
                                {/* button */}
                                <th>
                                    <button className="btn btn-ghost btn-xs">View Details</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="text-center">
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;