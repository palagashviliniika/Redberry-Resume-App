import React from 'react';

const CustomButton = (props) => {
    return (
        <button
            className={props.className + " py-[14px] px-[36px] tracking-wider text-white bg-buttonColor rounded-[8px] cursor-pointer"}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;
