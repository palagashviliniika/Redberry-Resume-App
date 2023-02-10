import React, {useState} from 'react';

const CustomTextareaInput = (props) => {
    const [isValidated, setIsValidated] = useState("")

    const handleKeyUp = (e) => {
        let regex = props.validation

        setTimeout(() => {
            if (regex.test(e.target.value)){
                setIsValidated(true)
            } else  {
                setIsValidated(false)
            }
        }, 2000)
    }

    return (
        <div className={props.className +  " flex flex-col gap-[8px] w-full"}>
            <label
                className={"font-[500]"}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <textarea
                className={`py-[13px] px-[16px] resize-none rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor ${isValidated===false && `border-borderColor-error focus:ring-borderColor-error focus:border-borderColor-error`} ${isValidated===true && `border-borderColor-correct focus:ring-borderColor-correct focus:border-borderColor-correct`}`}
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
