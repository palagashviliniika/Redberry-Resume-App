import React, {useState} from 'react';
import Header from "@/Components/Header";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";
import CustomTextareaInput from "@/Components/CustomTextareaInput";
import CustomButton from "@/Components/CustomButton";
import CustomDateInput from "@/Components/CustomDateInput";

const SecondPage = (props) => {
    const [disabled, setDisabled] = useState(true)

    return (
        <div className={"w-full"}>
            <div className={""}>
                <Header page={props.page}>
                    გამოცდილება
                </Header>
                <form className={"flex flex-col pl-[150px]"}>

                    <CustomInput
                        type={"text"}
                        name={"position"}
                        label={"პოზიცია"}
                        placeholder={"დეველოპერი, დიზაინერი, ა.შ."}
                        warning={"მინიმუმ 2 სიმბოლო"}
                        value={props.formData.position}
                        validation={/^.{2,}$/}
                        className={"mt-[32px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />

                    <CustomInput
                        type={"text"}
                        name={"employer"}
                        label={"დამსაქმებელი"}
                        placeholder={"დამსაქმებელი"}
                        warning={"მინიმუმ 2 სიმბოლო"}
                        value={props.formData.employer}
                        validation={/^.{2,}$/}
                        className={"mt-[32px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />

                    <div className={"mt-[32px] flex items-center justify-between gap-x-[52px]"}>
                        <CustomDateInput
                            name={"startDate"}
                            label={"დაწყების რიცხვი"}
                            value={props.formData.startDate}
                            setFormData={props.setFormData}
                            formData={props.formData}
                        />

                        <CustomDateInput
                            name={"endDate"}
                            label={"დამთავრების რიცხვი"}
                            value={props.formData.endDate}
                            setFormData={props.setFormData}
                            formData={props.formData}
                        />
                    </div>

                    <CustomTextareaInput
                        name={"description"}
                        label={"აღწერა"}
                        placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
                        value={props.formData.description}
                        validation={/^.{1,}$/}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        className={"mt-[32px]"}
                        setDisabled={setDisabled}
                    />

                    <hr className={"h-px w-full bg-gray-200 border-0 dark:bg-customBlack-gray my-[52px]"}/>

                    <div className={"mt-[150px] flex justify-between"}>

                        <CustomButton
                            switchPage={props.previousPage}
                        >
                            უკან
                        </CustomButton>

                        <CustomButton
                            switchPage={props.nextPage}
                            disabled={disabled}
                        >
                            შემდეგი
                        </CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SecondPage;
