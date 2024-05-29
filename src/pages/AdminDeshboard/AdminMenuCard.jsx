import React from 'react';
import { IoMdClose } from 'react-icons/io';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';


const AdminMenuCard = ({ menu, reFetch }) => {

    const handleDeleteMenu = async (id) => {
        console.log(id)
        const response = await axios.delete(`/menu/` + `${id}`, { withCredentials: true })
        console.log(response?.data)
        if (response?.data?.success) {
            toast.success(response?.data?.message)
            reFetch()
        }
    }

    return (
        <div className='bg-white p-3 rounded relative'>
            <button onClick={() => handleDeleteMenu(menu?._id)} className='absolute top-1  right-1 text-red-500 text-xl'>
                <IoMdClose />
            </button>

            <div className='w-40 h-44 '>
                <div className='w-full h-32 flex justify-center items-center'>
                    <img src={menu?.image} alt="" className='w-full h-full mx-auto object-scale-down'
                    />
                </div>

                <h1 className='text-ellipsis line-clamp-2 font-semibold' >{menu?.menu?.starter}</h1>

                <p>{moment(menu?.date).format("LL")}</p>

            </div>
        </div >
    );
}

export default AdminMenuCard
