import axios from 'axios';
import { config } from 'localforage';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setToken } from '../store/userSlice';


const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = "GENERAL"

        const userDetails = { name, email, password, role }
        // console.log(userDetails)

        try {
            const response = await axios.post('/sing-up', userDetails, { withCredentials: true })
            // console.log(response.data.token)
            if (response?.data?.success) {
                dispatch(setToken(response?.data?.token))
                localStorage.setItem('token', response?.data?.token)

                toast.success(response?.data?.message)
                navigate('/')
            }


        } catch (error) {
            // console.log('error', error?.response?.data?.message)
            toast.error(error?.response?.data?.message)
        }




    }

    return (
        <div className='mt-16 w-full flex items-center justify-center min-h-[75vh] max-h-[100vh]' >
            <div className='container w-[400px] md:w-[500px] md:mx-auto bg-slate-200 rounded p-4 mx-2'>
                <h1 className='text-center text-3xl font-bold text-orange-500 '>Sign up</h1>

                <form onSubmit={handleSubmit} >
                    <div className='flex flex-col mt-3'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder='enter your name'
                            required
                            className='px-2 input-sm md:input rounded border border-orange-500 border-opacity-50'
                        />
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='enter your email'
                            required
                            className='px-2 input-sm md:input rounded border border-orange-500 border-opacity-50'
                        />
                    </div>

                    <div className='flex flex-col mt-3'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='enter your password'
                            required
                            className='px-2 input-sm md:input  rounded border border-orange-500 border-opacity-50'
                        />
                    </div>

                    <div className='mt-7 flex justify-center'>
                        <button className='px-6 bg-orange-400 py-2 font-semibold text-slate-200 rounded'>Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;