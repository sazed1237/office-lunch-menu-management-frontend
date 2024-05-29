import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Menus from '../components/Menus';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../store/userSlice';

const Home = () => {
    const [date, setDate] = useState(new Date());
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // console.log("user from redux", user)
    // console.log(date)

    const fetchUserData = async () => {
        try {
            const response = await axios.get("/user-details", { withCredentials: true })
            // console.log(response)
            if (response?.data?.data) {
                dispatch(setUser(response?.data?.data))
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <div>
            <Banner></Banner>
            <Title date={date} setDate={setDate} ></Title>
            <Menus data={date} setDate={setDate}></Menus>
        </div>
    );
};

export default Home;