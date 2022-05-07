import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Booking = ({service}) => {
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    
    const date = new Date();
    const status = 'Approved';
    
    const onSubmit = data => {
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, date, user: user.email, service, status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('You have booking successfully!');
                reset();
                history.push('/orderPlace')
            }
        })
    };
    return (
        <div>
            <div className="mb-5 mt-5">
                <form className="flex flex-col w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                
                    <input defaultValue={user?.quantity}className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded-full " type="photo" {...register("quantity", {required: true})} placeholder="quantity"/>
                   
                    <input className="py-2 px-5 rounded-full mx-auto bg-green-600 text-white text-xl font-semibold mt-3" type="submit" value="Hit me" />
                </form>
            </div>
        </div>
    );
};

export default Booking;