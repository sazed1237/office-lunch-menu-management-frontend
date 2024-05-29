import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import axios from 'axios';
import moment from 'moment';

const Menus = ({ date, setDate }) => {

    const [menuItems, setMenuItems] = useState([])
    const [meal, setMeal] = useState({})


    const fetchMenu = async () => {

        const response = await axios.get('/menus')
        // console.log(data)
        if (response?.data?.success) {
            setMenuItems(response?.data?.data)
            // fetchMenu()
        }

    }

    // console.log(menuItems)


    useEffect(() => {
        fetchMenu()
    }, [])


    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        menuItems.map((menu, index) => {
                            return (
                                <div key={menu._Id} className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className='w-full h-80 object-cover' src={menu?.image} alt={menu?.menu?.starter} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{menu?.menu?.starter}</h2>
                                        <p>{menu?.menu?.main_course}</p>
                                        <p><span className='font-semibold'>Dessert :</span> {menu?.menu?.dessert}</p>
                                        <p><span className='font-semibold'>Beverage :</span> {menu?.menu?.beverage}</p>

                                        <p>
                                            <span className='font-semibold'>Available Meal :</span>
                                            {
                                                menu.limited_meals > 0 ? ` ${menu?.limited_meals}` : " No meal available"
                                            }
                                        </p>

                                        <div className="card-actions justify-end">
                                            <label
                                                htmlFor='bookingModal'
                                                onClick={() => setMeal(menu)}
                                                id='menu'
                                                className={`bg-orange-400 px-4 py-1.5 rounded text-white font-semibold hover:bg-orange-600 hover:scale-105 transition-all ${menu?.limited_meals === 0 && "btn btn-sm btn-disabled"}`}
                                            >
                                                Book Now
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {meal && <BookingModal meal={meal} date={date} ></BookingModal>}
        </>
    );
};

export default Menus;