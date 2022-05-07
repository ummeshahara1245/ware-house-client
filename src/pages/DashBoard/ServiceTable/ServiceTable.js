import React from 'react';

const ServiceTable = ({service, handleDeleteService}) => {
    const {name, quantity, price,SupplierName } = service.data;

    return (
        <tr className="mt-2 border border-black text-center hover:bg-blue-50 transition duration-300 ease-in-out">
            <td className="px-3"> {name}</td>
            <td className="px-3"> {quantity}</td>
            <td className="px-3"> {price}</td>
            <td className="px-3"> {SupplierName}</td>
            <td className="px-3"> {service?.admin}</td>
            <td className="px-3"><button onClick={() => handleDeleteService(service?._id)}><i className="fas fa-trash-alt text-red-500 text-lg"></i></button></td>
            <td className="px-3"><button><i className="far fa-edit text-lg text-green-500"></i></button></td>
        </tr>
    )
};

export default ServiceTable;