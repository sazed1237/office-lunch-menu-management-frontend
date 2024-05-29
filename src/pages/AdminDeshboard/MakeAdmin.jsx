import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import ROLE from '../../Shared/Role';
import axios from 'axios';

const MakeAdmin = ({ name, email, role, userId, onClose, callFac }) => {
    const [userRole, setUserRole] = useState(role)

    const handleOnChangeSelect = event => {
        setUserRole(event.target.value)
    }


    const handleUpdate = async () => {

        const userDetails = {
            role: userRole,
            userId: userId
        }
        console.log(userDetails)

        const response = await axios.patch('/user/admin', userDetails)
        // console.log(response?.data?.success)

        if (response?.data?.success) {
            toast.success(response?.data?.message)
            callFac()
            onClose(true)
        }

    }

    return (
        <div className='fixed z-10 top-0 bottom-0 left-0 right-0 h-full w-full flex justify-center items-center bg-slate-300 bg-opacity-50'>

            <div className='drop-shadow-3xl bg-white py-5 rounded-md px-5 w-full max-w-md relative'>

                <button className='absolute top-2 right-2 text-xl' onClick={onClose}>
                    <IoMdClose />
                </button>

                <h3 className='text-xl font-semibold'>Change User Role</h3>
                <div className='mt-4 '>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
                <div className='flex justify-between mt-3 mb-7 '>
                    <p>ROLE: </p>
                    <select className='border px-5 py-1' value={userRole} onChange={handleOnChangeSelect}>
                        {
                            Object.values(ROLE).map(r => {
                                return (
                                    <option value={r} key={r}>{r}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button onClick={handleUpdate} className="bg-red-500 mx-auto block px-2 md:px-3 py-1 rounded-sm text-white hover:bg-red-600" >Update</button>
            </div>
        </div>
    );
};

export default MakeAdmin;