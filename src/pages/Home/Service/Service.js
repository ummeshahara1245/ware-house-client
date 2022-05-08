import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = ({service}) => {
    const { name, quantity, photoUrl,description,price ,SupplierName} = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <div className="">
             <div class="col">
            <div className=" bg-gray-200 text-center mt-3 mb-3 rounded card h-100">
            <img className="rounded h-60 w-full card-img-top" src={photoUrl} alt="" />
            <div class="card-body">
            <h3>{name}</h3>
            <p>Service quantity:{quantity}</p>
            <p>{price} BDT</p>
            <p>{description}</p>
            <p>{SupplierName}</p>
            <button onClick={() => handleBooking(service._id)} className="bg-red-400 px-3 py-1 rounded-2xl text-white mb-2">Stock Update</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Service;