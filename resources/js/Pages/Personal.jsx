import React, {useState} from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import CustomInput from "@/Components/CustomInput";

export default function Personal(props) {
    const [formData, setFormData] = useState(
        {
            firstName:""
        }
    )

    const handleChange = (event) => {
        const {name,value} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <>
            <Head title="Personal Info" />

            <div className={"w-2/4"}>
                <Header page={1}>
                    პირადი ინფო
                </Header>
                <form action="" className={"pl-[150px]"}>
                    <CustomInput
                        name={"firstName"}
                        label={"სახელი"}
                        placeholder={"name"}
                        warning={"მინიმუმ 2 ასო, ქართული ასოები"}
                        value={formData.firstName}
                        onChange={handleChange}
                        validation={/^[ა-ჰ]{2,}$/}
                    />
                </form>
            </div>

        </>
    );
}
