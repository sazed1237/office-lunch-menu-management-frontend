import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import uploadImage from '../../helpers/uploadImage';
import axios from 'axios';
import { toast } from 'react-toastify';


const UploadMenu = () => {

    const [image, setImage] = useState('')

    // console.log("image", image)

    const handleUploadImage = async (event) => {
        const file = event.target.files[0]
        console.log(file)
        const uploadImageCloudinary = await uploadImage(file)
        console.log(uploadImageCloudinary.url)
        setImage(uploadImageCloudinary.url)

        // setImage((prev) => {
        //     return {
        //         ...prev,
        //         productImage: [...prev.productImage, uploadImageCloudinary.url]
        //     }
        // })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;

        const menu = {
            starterName: form.starterName.value,
            main_course: form.main_course.value,
            dessert: form.dessert.value,
            beverage: form.beverage.value,
        }
        const limited_meals = form.limited_meals.value;
        const date = form.date.value;
        // const image = image

        const menuDetails = { date, menu, image, limited_meals }
        // console.log(menuDetails)

        try {

            const response = await axios.post('/upload-menu', menuDetails, { withCredentials: true })
            // console.log(response?.data)
            if (response?.data?.success) {
                toast.success(response?.data?.message)
            } else {
                toast.error(response?.data?.message)
            }

        } catch (error) {
            toast.error(error?.response?.data?.message)

        }
    }




    return (
        <div className='w-full'>
            <div className='text-3xl mb-8 text-center font-bold underline underline-offset-8'>
                <h1>Add Menu</h1>
            </div>
            <div className='w-full max-w-3xl bg-white p-4 mx-auto'>

                <form onSubmit={handleSubmit}>
                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="starterName">Starter Name :</label>
                        <input
                            type="text"
                            name="starterName"
                            placeholder='Enter starter name'
                            required

                            id="starterName"
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="main_course">Main Course :</label>
                        <input
                            type="text"
                            name="main_course"
                            placeholder='Enter main_course '
                            required

                            id="main_course"
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="dessert">Dessert :</label>
                        <input
                            type="text"
                            name="dessert"
                            placeholder='Enter dessert'
                            required

                            id="dessert"
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="beverage">beverage :</label>
                        <input
                            type="text"
                            name="beverage"
                            placeholder='Enter beverage'
                            required

                            id="beverage"
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="uploadImage">Menu Image :</label>
                        <label htmlFor="uploadImage">
                            <div onChange={handleUploadImage} className='bg-slate-200 text-slate-600 w-full flex items-center justify-center flex-col h-24 p-2 rounded  cursor-pointer'>
                                <span className='text-3xl'><FaCloudUploadAlt /></span>
                                <p><small>Upload Menu Image</small></p>
                                <input type="file" className='hidden' name="uploadImage" id="uploadImage" />
                            </div>
                        </label>
                        <div>
                            {
                                image ? (
                                    <div className='flex gap-2'>
                                        <div className='relative group'>
                                            <img className='bg-slate-300 h-20 max-w-24 border cursor-pointer'
                                                src={image}
                                                alt="image"
                                            />
                                        </div>
                                    </div>

                                )
                                    : (
                                        <p className='text-sm text-red-500'>*Please upload image</p>
                                    )
                            }
                        </div>
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="limited_meals">Limits :</label>
                        <input
                            type="number"
                            name="limited_meals"
                            placeholder='Enter limited_meals'
                            required

                            id="limited_meals"
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>

                    <div className='grid w-full py-2 gap-2'>
                        <label htmlFor="date">Date :</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            required
                            className='bg-slate-200 w-full p-2 rounded  ' />
                    </div>


                    <button
                        className="bg-red-500 mx-auto px-2 md:px-3 py-1 my-5 rounded-sm text-white hover:bg-red-600 flex items-center gap-2"
                        type="submit"
                    ><span><FaPlus /></span>Add Menu</button>
                </form>
            </div>

        </div>
    );
};

export default UploadMenu;