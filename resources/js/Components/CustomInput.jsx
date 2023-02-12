import React, {useEffect, useRef, useState} from 'react';

const CustomInput = (props) => {
    const [isValidated, setIsValidated] = useState("")
    const ref = useRef()

    const handleChange = (event) => {
        let regex = props.validation

        // setTimeout(() => {
        // if (regex.test(event.target.value)){
        //     setIsValidated(true)
        //     props.setDisabled(false)
        // } else  {
        //     setIsValidated(false)
        //     props.setDisabled(true)
        // }
        //
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

        if (ref.current.value.length > 0){
            if (regex.test(ref.current.value)){
                setIsValidated(true)
                props.setDisabled(prevDisabled => {
                    return(
                        {
                            ...prevDisabled,
                            [props.name]: false
                        }
                    )
                })
            } else  {
                setIsValidated(false)
                props.setDisabled(prevDisabled => {
                    return(
                        {
                            ...prevDisabled,
                            [props.name]: true
                        }
                    )
                })
            }
        }

    }, [props.formData])


    return (
        <div className={props.className + " flex flex-col gap-[8px] w-full"}>
            <label
                className={`font-medium ${isValidated===false && `text-borderColor-textError`}`}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <div className={"flex items-center w-full relative"}>
                <input
                    ref={ref}
                    className={`py-[14px] px-[16px] w-full font-[200] rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor ${isValidated===false && `border-borderColor-error focus:ring-borderColor-error focus:border-borderColor-error`} ${isValidated===true && `border-borderColor-correct focus:ring-borderColor-correct focus:border-borderColor-correct`}`}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    name={props.name}
                    value={props.value}
                    id={props.name}
                />
                {isValidated===false && <img src="./images/error.svg" className={"w-[24px] h-[24px] absolute -right-10"}/>}
                {isValidated===true && <img src="./images/correct.svg" className={"w-[24px] h-[24px] absolute right-4"}/>}
            </div>

            {props.warning && <p className={"font-[200] text-sm"}>{props.warning}</p>}
        </div>
    );
};

export default CustomInput;
