import React from 'react';

const CustomTextareaInput = (props) => {
    const handleChange = (event) => {
        // let regex = props.validation
        //
        // setTimeout(() => {
        //     if (regex.test(event.target.value)){
        //         setIsValidated(true)
        //     } else  {
        //         setIsValidated(false)
        //     }
        //     console.log(isValidated)
        //
        // }, 2000)

        const {name,value} = event.target
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: {text: value, validated: ""}
            }
        })
        console.log(props.formData)
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
                className={"py-[13px] px-[16px] resize-none rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor"}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value.text}
                onChange={handleChange}
                rows="4"
            >

            </textarea>
        </div>
    );
};

export default CustomTextareaInput;
