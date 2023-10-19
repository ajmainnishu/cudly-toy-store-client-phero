import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // toys state
    const [allToys, setAllToys] = useState([]);
    const [singleToy, setToy] = useState(null)
    // toys fetch from server
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    // single toy details button
    const handleToy = id => {
        const toy = allToys.find(t => t._id === id);
        setToy(toy);
        // user check
        if (!user) {
            // redirect login page
            navigate('/login')
        } else {
            document.getElementById('my_modal_1').showModal()
        }
    }
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
                            allToys.slice(0, 20).map(toy => <tr key={toy._id} className="text-center">
                                <td className="capitalize">{toy.seller_name}</td>
                                <td className="capitalize">{toy.toy_name}</td>
                                <td className="capitalize">{toy.category}</td>
                                <td className="capitalize">{toy.price}</td>
                                <td className="capitalize">{toy.quantity}</td>
                                {/* button */}
                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleToy(toy._id)}>View Details</button>
                                    {/* modal */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <img src={singleToy?.toy_img} alt="toy image" className="rounded-lg" />
                                            <h3 className="font-bold text-lg py-2">{singleToy?.toy_name}</h3>
                                            <hr />
                                            <div className="py-3">
                                                <p className="">Seller Name: <span className="font-normal">{singleToy?.seller_name}</span></p>
                                                <p className="">Seller Email: <span className="font-normal">{singleToy?.seller_email}</span></p>
                                            </div>
                                            <hr />
                                            <p>Price: <span className="font-normal">$ {singleToy?.price}</span></p>
                                            <p>Available Quantity: <span className="font-normal">{singleToy?.quantity}</span></p>
                                            <p>Details: <span className="font-normal">{singleToy?.details}</span></p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
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