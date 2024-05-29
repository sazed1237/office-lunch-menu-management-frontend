import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Title = ({date, setDate}) => {
    
// console.log(date)
    return (
        <div className='w-full flex flex-col items-center my-10'>
            <p className='text-lg font-semibold text-slate-600'>---{moment(date).format("LL")}---</p>
            <h2 className='text-3xl mb-3 font-bold text-orange-400'>Available Menu</h2>

            <DatePicker
                className="px-2 text-center text-lg font-semibold py-1 rounded"
                selected={date}
                onChange={(date) => setDate(date)}
            />


        </div>
    );
};

export default Title;