import React, {useEffect, useRef, useState} from 'react';

const CustomTextareaInput = (props) => {
    const [isValidated, setIsValidated] = useState(props.value?.validated)
    const ref = useRef()

    const handleChange = (event) => {
        let regex = props.validation

        // setTimeout(() => {
        //     if (regex.test(event.target.value)){
        //         setIsValidated(true)
        //         props.setDisabled(false)
        //     } else  {
        //         setIsValidated(false)
        //         props.setDisabled(true)
        //     }
        // }, 2000)

        const {name,value} = event.target
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    useEffect(() => {
        let regex = props.validation

        if (ref.current.value.length > 0 && props.validation){
            if (regex.test(ref.current.value)){
                setIsValidated(true)
                props.setDisabled(false)
            } else  {
                setIsValidated(false)
                props.setDisabled(true)
            }
        }

    }, [props.formData])

    return (
        <div className={props.className +  " flex flex-col gap-[8px] w-full"}>
            <label
                className={`font-medium ${isValidated===false && `text-borderColor-textError`}`}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <textarea
                ref={ref}
                className={`py-[13px] px-[16px] resize-none rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor ${isValidated===false && `border-borderColor-error focus:ring-borderColor-error focus:border-borderColor-error`} ${isValidated===true && `border-borderColor-correct focus:ring-borderColor-correct focus:border-borderColor-correct`}`}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}
                rows="4"
            >

            </textarea>
        </div>
    );
};

export default CustomTextareaInput;
