import React, {useEffect, useState} from 'react';
import {data} from "autoprefixer";

const CustomSelectInput = (props) => {

    const handleChange = (event) => {

        const {name,value} = event.target
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    const selectOptions = props.degrees.map(option =>{
        return(
            <option key={option.id} value={option.id}>{option.title}</option>
        )
    })

    return (
        <div className={props.className + " flex flex-col gap-[8px] w-full"}>
            <label
                className={`font-medium`}
                htmlFor={props.name}
            >
                {props.label}
            </label>

            <select
                className={`py-[14px] px-[16px] w-full font-[200] rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor`}
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={handleChange}
            >
                <option value="" disabled selected hidden>აირჩიეთ ხარისხი</option>
                {selectOptions}
            </select>
        </div>
    );
};

export default CustomSelectInput;
