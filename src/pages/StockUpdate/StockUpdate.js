import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const [service, setService] = useState();
    const { id } = useParams();
      useEffect(() => {
          const url = `http://localhost:5000/services/${id}`
          fetch(url)
              .then(res => res.json())
              .then(data => setService(data))
      }, [id])
    return (
        <div>
            <input type="text" value={service?.data?.quantity} onChange={(e)=>console.log(e.target.value)} />
        </div>
    );
};

export default StockUpdate;