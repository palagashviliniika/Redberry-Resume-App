import React from 'react';

const CustomTextareaInput = (props) => {


    return (
        <div className={props.className +  " flex flex-col gap-[8px] w-full"}>
            <label
                className={"font-[500]"}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <textarea
                className={"py-[13px] px-[16px] resize-none rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor"}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                rows="4"
            >

            </textarea>
        </div>
    );
};

export default CustomTextareaInput;
