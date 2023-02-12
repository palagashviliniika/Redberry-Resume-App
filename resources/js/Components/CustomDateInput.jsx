import React from 'react';

const CustomDateInput = (props) => {
    const handleChange = (event) => {
        const {name,value} = event.target
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className={props.className +  " flex flex-col gap-[8px] w-full"}>
            <label
                className={"font-[500]"}
                htmlFor={props.name}
            >
                {props.label}
            </label>

            <input
                className={"py-[13px] px-[16px] resize-none rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor"}
                type="date"
                name={props.name}
                id={props.name}
                placeholder={"mm / dd / yyyy"}
                value={props.value}
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default CustomDateInput;
