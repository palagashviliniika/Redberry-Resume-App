import React, {useState} from 'react';

const CustomFileInput = (props) => {
    const [isValidated, setIsValidated] = useState(false)

    return (
        <div className={"mt-[46px] flex items-center"}>
            <p className={"mr-[20px] font-[500] text-lg"}>{props.label}</p>
            <label
                // className={`font-medium ${isValidated===false && `text-borderColor-textError`}`}
                className={"py-[4px] px-[20px] bg-inputColor rounded text-white font-[200] text-sm hover:opacity-90 active:scale-95 duration-200"}
                htmlFor={props.name}
            >
                {props.placeholder}
            </label>
            <input
                type="file"
                name={props.name}
                id={props.name}
                className={"hidden"}
            />
        </div>
    );
};

export default CustomFileInput;
