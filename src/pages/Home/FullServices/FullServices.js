import React, { useEffect, useState } from 'react';
import FullService from '../FullService/FullService';

const FullServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://intense-gorge-95170.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data));
    }, [])

    const handleDeleteService = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://intense-gorge-95170.herokuapp.com/services/${id}`;
            fetch(url, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remainingServices = services.filter(service => service._id !==id);
                        setServices(remainingServices);
                    }
                })
        }
    }


    return (
        <div className="w-100">

<div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
            {
                services.map(service => <FullService service={service} key={service._id} handleDeleteService={handleDeleteService} />)
            }
        </div>
        </div>
    );
};

export default FullServices;