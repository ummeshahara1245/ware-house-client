import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const OrderReview = () => {
    const [service, setService] = useState();
    const { id } = useParams();
      useEffect(() => {
          const url = `http://localhost:5000/services/${id}`
          fetch(url)
              .then(res => res.json())
              .then(data => setService(data))
      }, [])

    return (
        <div className="container mt-5 mb-5">
                <h4 className="text-center mb-4">You are going to <span className="text-green-600">BOOKING</span> this service!!!</h4>
            <div className="flex justify-between items-center">
                <div className="text-center bg-green-600 hover:bg-green-700 transition 3s rounded text-white pb-3">
                    <img className="h-80 mb-3 rounded" src={service?.data.photoUrl} alt="" />
                    <h4>{service?.data.name}</h4>
                    <h5>Service quantity:{service?.data.quantity}</h5>
                    <h6>price: {service?.data.price} BDT</h6>
                    <p>Supplier Name{service?.data.SupplierName}</p>

                    <p>{service?.data.description}</p>
                    <button className="bg-red-400 px-3 py-1 rounded-2xl text-white mb-2">delivered</button>
                </div>
                <div>
                    <Booking service={service} />
                </div>
            </div>
        </div>
    )
}

export default OrderReview;