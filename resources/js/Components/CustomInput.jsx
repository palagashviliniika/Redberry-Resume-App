import React, {useEffect, useState} from 'react';

const CustomInput = (props) => {
    const [isValidated, setIsValidated] = useState(props.value.validated)

    // const handleKeyUp = (e) => {
    //     let regex = props.validation
    //
    //     setTimeout(() => {
    //         if (regex.test(e.target.value)){
    //             setIsValidated(true)
    //         } else  {
    //             setIsValidated(false)
    //         }
    //
    //         props.setFormData(prevFormData => {
    //             return{
    //                 ...prevFormData,
    //                 [props.name]: {...prevFormData[props.name], validated: isValidated}
    //             }
    //         })
    //     }, 2000)
    // }

    const handleChange = (event) => {
        let regex = props.validation

        setTimeout(() => {
        if (regex.test(event.target.value)){
            setIsValidated(true)
        } else  {
            setIsValidated(false)
        }
        console.log(isValidated)

        }, 2000)

        const {name,value} = event.target
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: {text: value, validated: isValidated}
            }
        })
        console.log(props.formData)
    }

    useEffect(() => {
        props.setFormData(prevFormData => {
            return{
                ...prevFormData,
                [props.name]: {...prevFormData[props.name], validated: isValidated}
            }
        })
    }, [isValidated])

    // console.log(props.formData[props.name])
    // console.log(props.value)

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
                    className={`py-[14px] px-[16px] w-full font-[200] rounded border border-borderColor focus:ring-borderColor focus:ring-1 focus:border-borderColor ${isValidated===false && `border-borderColor-error focus:ring-borderColor-error focus:border-borderColor-error`} ${isValidated===true && `border-borderColor-correct focus:ring-borderColor-correct focus:border-borderColor-correct`}`}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    // onKeyUp={props.validation && handleKeyUp}
                    name={props.name}
                    value={props.value.text}
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
