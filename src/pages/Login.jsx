import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setToken } from '../store/userSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const userDetails = { email, password }
        // console.log(userDetails)

        try {

            const response = await axios.post('/login', userDetails, { withCredentials: true })
            // console.log(response?.data?.token)
            dispatch(setToken(response?.data?.token))
            localStorage.setItem('token', response?.data?.token)

            navigate('/')
            toast.success(response?.data?.message)

        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    }

    return (
        <div className='mt-16 w-full flex items-center justify-center min-h-[75vh] max-h-[100vh]' >
            <div className='container w-[400px] md:w-[500px] md:mx-auto bg-slate-200 rounded p-4 mx-2'>
                <h1 className='text-center text-3xl font-bold text-orange-500 '>Login</h1>

                <form onSubmit={handleSubmit} >
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
                        <button className='px-6 bg-orange-400 py-2 font-semibold text-slate-200 rounded'>Login</button>
                    </div>
                </form>
                <div>
                    <p className='mt-5 text-center'>Don't have account <Link to={'/signup'} className='text-orange-500 font-semibold' >Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;