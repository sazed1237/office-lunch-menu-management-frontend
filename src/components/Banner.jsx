import React from 'react';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <section className='w-full h-full '>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden relative'>
                <img className='min-h-[55vh] md:min-h-full' src={bannerImg} alt="" />
            </div>
            <div className='absolute top-0 w-full h-full flex flex-col items-center lg:justify-center lg:mt-0 mt-24'>
                <h1 className=' text-xl md:text-4xl font-bold text-slate-300'>Recipe for all of our family</h1>
                <p className='lg:w-1/2 w-5/6 text-center my-3 text-slate-400 text-ellipsis line-clamp-4  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos numquam ea impedit quis quidem beatae, possimus maxime ipsum laboriosam, minima quas? Quam incidunt voluptatum beatae voluptatem et veritatis saepe impedit dolore, quidem sequi eius laboriosam eum ea explicabo harum blanditiis excepturi maiores aspernatur ratione enim. Minus tempora impedit minima quae.</p>
                <div className='mt-5'>
                    <button id='menu' className='bg-orange-400 px-4 py-1.5 rounded text-white'>Visit Menu</button>
                </div>
            </div>
        </section >
    );
};

export default Banner;