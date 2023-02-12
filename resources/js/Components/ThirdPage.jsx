import React, {useState} from 'react';
import Header from "@/Components/Header";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";
import CustomTextareaInput from "@/Components/CustomTextareaInput";
import CustomButton from "@/Components/CustomButton";
import CustomDateInput from "@/Components/CustomDateInput";
import CustomSelectInput from "@/Components/CustomSelectInput";
import {Link} from "@inertiajs/react";

const ThirdPage = (props) => {
    const [disabled, setDisabled] = useState(true)

    return (
        <div className={"w-full"}>
            <div className={""}>
                <Header page={props.page}>
                    განათლება
                </Header>
                <form className={"flex flex-col pl-[150px]"}>

                    <CustomInput
                        type={"text"}
                        name={"school"}
                        label={"სასწავლებელი"}
                        placeholder={"სასწავლებელი"}
                        warning={"მინიმუმ 2 სიმბოლო"}
                        value={props.formData.school}
                        validation={/^.{2,}$/}
                        className={"mt-[32px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}

                    />

                    <div className={"mt-[20px] flex w-full justify-between gap-x-[52px] items-center"}>
                        <CustomSelectInput
                            name={"degree"}
                            label={"ხარისხი"}
                            value={props.formData.degree}
                            setFormData={props.setFormData}
                            formData={props.formData}
                            degrees={props.degrees}
                        />

                        <CustomDateInput
                            name={"gradDate"}
                            label={"დამთავრების რიცხვი"}
                            value={props.formData.gradDate}
                            setFormData={props.setFormData}
                            formData={props.formData}
                        />
                    </div>

                    <CustomTextareaInput
                        name={"schoolDescription"}
                        label={"აღწერა"}
                        placeholder={"განათლების აღწერა"}
                        value={props.formData.schoolDescription}
                        validation={/^.{1,}$/}
                        className={"mt-[36px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />



                    <hr className={"h-px w-full bg-gray-200 border-0 dark:bg-customBlack-gray my-[52px]"}/>

                    <div className={"mt-[150px] flex justify-between"}>

                        <CustomButton
                            switchPage={props.previousPage}
                        >
                            უკან
                        </CustomButton>

                        <Link
                            disabled={disabled}
                            href={"/resume"}
                            className={"py-[14px] px-[36px] tracking-wider text-white bg-buttonColor rounded-[8px] cursor-pointer"}>
                            დასრულება
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ThirdPage;
