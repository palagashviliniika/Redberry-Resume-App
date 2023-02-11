import React, {useEffect, useState} from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";
import CustomTextareaInput from "@/Components/CustomTextareaInput";
import Resume from "@/Components/Resume";
import CustomButton from "@/Components/CustomButton";

export default function Personal(props) {
    const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem("formData")) ||
        {
            firstName: "",
            lastName: "",
            image: "",
            aboutMe: "",
            email: "",
            phone: ""
        }
    )

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))
    }, [formData])

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

            <div className={"flex gap-[230px]"}>
                <div className={"w-2/4"}>
                    <Header page={1}>
                        პირადი ინფო
                    </Header>
                    <form action="" className={"flex flex-col pl-[150px]"}>
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
                        {/*    onChange={handleChange}*/}
                        {/*    value={formData.aboutMe}*/}

                        <CustomTextareaInput
                            name={"aboutMe"}
                            label={"ჩემ შესახებ (არასავალდებულო)"}
                            placeholder={"ზოგადი ინფო შენ შესახებ"}
                            value={formData.aboutMe}
                            onChange={handleChange}
                            className={"mt-[54px]"}
                        />

                        <CustomInput
                            type={"email"}
                            name={"email"}
                            label={"ელ.ფოსტა"}
                            placeholder={"anzorr666@redberry.ge"}
                            warning={"უნდა მთავრდებოდეს @redberry.ge-ით"}
                            value={formData.email}
                            onChange={handleChange}
                            validation={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/}
                            className={"mt-[32px]"}
                        />

                        <CustomInput
                            type={"text"}
                            name={"phone"}
                            label={"მობილურის ნომერი"}
                            placeholder={"+995 551 12 34 56"}
                            warning={"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
                            value={formData.phone}
                            onChange={handleChange}
                            validation={/^(\+995)(79\d{7}|5\d{8})$/}
                            className={"mt-[32px]"}
                        />

                        <div className={"mt-[150px] flex justify-end"}>
                            <CustomButton>
                                შემდეგი
                            </CustomButton>
                        </div>


                    </form>


                </div>

                <div className={"w-2/4"}>
                    <Resume
                        formData={formData}
                    />
                </div>
            </div>
        </>
    );
}
