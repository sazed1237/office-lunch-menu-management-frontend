import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookingModal = ({ meal, date }) => {
    // console.log("in modal", meal)
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;
        const menuName = form.menuName.value;
        const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const meal_Id = meal._id


        const bookingData = { meal_Id, menuName, date, name, email }
        // console.log(bookingData)

        try {
            const response = await axios.post('/booking-lunch', bookingData, { withCredentials: true })
            console.log(response?.data)

            if (response?.data?.success) {
                toast.success(response?.data?.message)
                navigate('/')

            } else {
                toast.error(response?.data?.message)
            }

        } catch (error) {
            console.log("error", error?.response?.data)
        }
    }

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor='bookingModal' className='fixed top-2 right-2 text-2xl cursor-pointer'>
                        <IoClose></IoClose>
                    </label>
                    <h3 className="font-bold text-lg">{meal?.menu?.starter}</h3>

                    <form onSubmit={handleSubmit} className='space-y-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="menuName">Menu Name</label>
                            <input
                                type="text"
                                name="menuName"
                                id="menuName"
                                defaultValue={meal?.menu?.starter}
                                className='border px-2 py-1 rounded bg-slate-100 text-slate-700 border-orange-400 border-opacity-55'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="date">Date</label>
                            <input
                                type="text"
                                name="date"
                                id="date"
                                defaultValue={moment(date).format("LL")}
                                disabled
                                className='border input-disabled px-2 py-1 rounded bg-slate-100 text-slate-700 border-orange-400 border-opacity-55'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Employer Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={user.name}
                                placeholder='Your Name'
                                className='border px-2 py-1 rounded bg-slate-100 text-slate-700 border-orange-400 border-opacity-55'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={user.email}
                                placeholder='Email'
                                disabled
                                className='border px-2 py-1 rounded bg-slate-100 text-slate-700 border-orange-400 border-opacity-55'
                            />
                        </div>

                        <div className='pt-4 w-full flex items-center justify-center '>
                            <button className='bg-orange-500 px-4 py-1.5 rounded font-semibold text-white'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;