import React, {useState} from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";

export default function Personal(props) {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            image: "",
            aboutMe: ""
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
                    <div className={"flex w-full justify-between gap-x-[52px]"}>
                        <CustomInput
                            type={"text"}
                            name={"firstName"}
                            label={"სახელი"}
                            placeholder={"ანზორ"}
                            warning={"მინიმუმ 2 ასო, ქართული ასოები"}
                            value={formData.firstName}
                            onChange={handleChange}
                            validation={/^[ა-ჰ]{2,}$/}
                        />

                        <CustomInput
                            type={"text"}
                            name={"lastName"}
                            label={"გვარი"}
                            placeholder={"მუმლაძე"}
                            warning={"მინიმუმ 2 ასო, ქართული ასოები"}
                            value={formData.lastName}
                            onChange={handleChange}
                            validation={/^[ა-ჰ]{2,}$/}
                        />
                    </div>

                    <CustomFileInput
                        name={"image"}
                        label={"პირადი ფოტოს ატვირთვა"}
                        placeholder={"ატვირთვა"}
                    />

                    {/*<CustomInput*/}
                    {/*    type={"textarea"}*/}
                    {/*    name={"aboutMe"}*/}
                    {/*    label={"გვარი"}*/}
                    {/*    placeholder={"მუმლაძე"}*/}
                    {/*    warning={"მინიმუმ 2 ასო, ქართული ასოები"}*/}
                    {/*    value={formData.aboutMe}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    className={"mt-[54px]"}*/}
                    {/*/>*/}

                </form>
            </div>

        </>
    );
}
