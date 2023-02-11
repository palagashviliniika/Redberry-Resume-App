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
            firstName: {
                text: "",
                validated: ""
            },
            lastName: {
                text: "",
                validated: ""
            },
            image: "",
            aboutMe: {
                text: "",
                validated: ""
            },
            email: {
                text: "",
                validated: ""
            },
            phone: {
                text: "",
                validated: ""
            }
        }
    )

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))
    }, [formData])

    // const handleChange = (event) => {
    //     const {name,value} = event.target
    //     setFormData(prevFormData => {
    //         return{
    //             ...prevFormData,
    //             [name]: {...prevFormData[name], text: value}
    //         }
    //     })
    // }

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
                                validation={/^[ა-ჰ]{2,}$/}
                                setFormData={setFormData}
                                formData={formData}
                            />

                            <CustomInput
                                type={"text"}
                                name={"lastName"}
                                label={"გვარი"}
                                placeholder={"მუმლაძე"}
                                warning={"მინიმუმ 2 ასო, ქართული ასოები"}
                                value={formData.lastName}
                                validation={/^[ა-ჰ]{2,}$/}
                                setFormData={setFormData}
                                formData={formData}
                            />
                        </div>

                        <CustomFileInput
                            name={"image"}
                            label={"პირადი ფოტოს ატვირთვა"}
                            placeholder={"ატვირთვა"}
                        />
                        {/*    */}
                        {/*    value={formData.aboutMe}*/}

                        <CustomTextareaInput
                            name={"aboutMe"}
                            label={"ჩემ შესახებ (არასავალდებულო)"}
                            placeholder={"ზოგადი ინფო შენ შესახებ"}
                            value={formData.aboutMe}
                            className={"mt-[54px]"}
                            setFormData={setFormData}
                            formData={formData}
                        />

                        <CustomInput
                            type={"email"}
                            name={"email"}
                            label={"ელ.ფოსტა"}
                            placeholder={"anzorr666@redberry.ge"}
                            warning={"უნდა მთავრდებოდეს @redberry.ge-ით"}
                            value={formData.email}
                            validation={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/}
                            className={"mt-[32px]"}
                            setFormData={setFormData}
                            formData={formData}
                        />

                        <CustomInput
                            type={"text"}
                            name={"phone"}
                            label={"მობილურის ნომერი"}
                            placeholder={"+995 551 12 34 56"}
                            warning={"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
                            value={formData.phone}
                            validation={/^(\+995)(79\d{7}|5\d{8})$/}
                            className={"mt-[32px]"}
                            setFormData={setFormData}
                            formData={formData}
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
