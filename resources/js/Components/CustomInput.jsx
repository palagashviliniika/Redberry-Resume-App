import React from 'react';

const CustomInput = (props) => {
    const handleKeyUp = (e) => {
        let regex = props.validation

        setTimeout(() => {
            if(regex.test(e.target.value) && e.target.value.length > 2){
                console.log(true)
            } else  {
                console.log(false)
            }
        }, 300)
    }

    return (
        <div className={"flex flex-col gap-[8px]"}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                className={"py-[14px] px-[16px]"}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onKeyUp={props.validation && handleKeyUp}
                name={props.name}
                value={props.value}
            />
            <p className={"font-[200]"}>{props.warning}</p>
        </div>
    );
};

export default CustomInput;
