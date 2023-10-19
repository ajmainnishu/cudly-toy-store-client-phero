import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const AllToys = () => {
    // toys state
    const [allToys, setAllToys] = useState([]);
    const [toy, setToy] = useState(null)
    // toys fetch from server
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    const handleToy = id => {

        const toy = allToys.find(t => t._id === id);
        setToy(toy);


        document.getElementById('my_modal_1').showModal()

        // const toy = <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
        //                             <dialog id="my_modal_1" className="modal">
        //                                 <div className="modal-box">
        //                                     <h3 className="font-bold text-lg">Hello!</h3>
        //                                     <p className="py-4">Press ESC key or click the button below to close</p>
        //                                     <div className="modal-action">
        //                                         <form method="dialog">
        //                                             <button className="btn">Close</button>
        //                                         </form>
        //                                     </div>
        //                                 </div>
        //                             </dialog> 


        //  <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
        //                             <dialog id="my_modal_1" className="modal">
        //                                 <div className="modal-box">
        //                                     <h3 className="font-bold text-lg">Hello!</h3>
        //                                     <p className="py-4">Press ESC key or click the button below to close</p>
        //                                     <div className="modal-action">
        //                                         <form method="dialog">
        //                                             <button className="btn">Close</button>
        //                                         </form>
        //                                     </div>
        //                                 </div>
        //                             </dialog> 



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
                            allToys.map(toy => <tr key={toy._id} className="text-center">
                                <td className="capitalize">{toy.seller_name}</td>
                                <td className="capitalize">{toy.toy_name}</td>
                                <td className="capitalize">{toy.category}</td>
                                <td className="capitalize">{toy.price}</td>
                                <td className="capitalize">{toy.quantity}</td>
                                {/* button */}
                                <th>
                                    {/* <Link to={`/toy/${toy._id}`} className="btn btn-ghost btn-xs">View Details</Link> */}




                                    {/* <button onClick={() => handleToy(toy._id)} className="btn btn-ghost btn-xs">View Details</button> */}



                                    <button className="btn btn-ghost btn-xs" onClick={() => handleToy(toy._id)}>View Details</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <img src={toy.toy_img} alt="toy image" className="rounded-lg" />
                                            <h3 className="font-bold text-lg py-2">{toy.toy_name}</h3>
                                            <hr />
                                            <div className="py-3">
                                                <p className="">Seller Name: <span className="font-normal">{toy.seller_name}</span></p>
                                                <p className="">Seller Email: <span className="font-normal">{toy.seller_email}</span></p>
                                            </div>
                                            <hr />
                                            <p>Price: <span className="font-normal">$ {toy.price}</span></p>
                                            <p>Available Quantity: <span className="font-normal">{toy.quantity}</span></p>
                                            <p>Details: <span className="font-normal">{toy.details}</span></p>
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