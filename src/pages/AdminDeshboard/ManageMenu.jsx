import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminMenuCard from './AdminMenuCard';

const ManageMenu = () => {

    const [allMenu, setAllMenu] = useState([])

    const fetchAllMenus = async () => {
        const response = await axios.get('/menus', { withCredentials: true })
        // console.log(response?.data?.data)

        if (response?.data?.success) {
            setAllMenu(response?.data?.data)
            fetchAllMenus()
        }
    }

    // console.log("all menu", allMenu)

    useEffect(() => {
        fetchAllMenus()
    }, [])

    return (
        <div>
            <div className='bg-white px-2 text-2xl font-semibold py-2'>
                <h1>Total Products: {allMenu?.length}</h1>
            </div>

            <div className='flex items-center flex-wrap gap-4 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
                {
                    allMenu?.map((menu, index) => {
                        return (
                            <AdminMenuCard
                                key={menu?._id}
                                menu={menu}
                                reFetch={fetchAllMenus}
                            ></AdminMenuCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ManageMenu;