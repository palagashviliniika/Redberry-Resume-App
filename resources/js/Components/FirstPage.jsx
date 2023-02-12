import React, {useState} from 'react';
import Header from "@/Components/Header";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";
import CustomTextareaInput from "@/Components/CustomTextareaInput";
import CustomButton from "@/Components/CustomButton";

const FirstPage = (props) => {
    const [disabled, setDisabled] = useState([
        {
            firstName: true,
            lastName: true,
            aboutMe: true,
            email: true,
            phone: true
        }
    ])

    return (
        <div className={"w-full"}>
            <div className={""}>
                <Header page={props.page}>
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
                            value={props.formData.firstName}
                            validation={/^[ა-ჰ]{2,}$/}
                            setFormData={props.setFormData}
                            formData={props.formData}
                            setDisabled={setDisabled}
                        />

                        <CustomInput
                            type={"text"}
                            name={"lastName"}
                            label={"გვარი"}
                            placeholder={"მუმლაძე"}
                            warning={"მინიმუმ 2 ასო, ქართული ასოები"}
                            value={props.formData.lastName}
                            validation={/^[ა-ჰ]{2,}$/}
                            setFormData={props.setFormData}
                            formData={props.formData}
                            setDisabled={setDisabled}
                        />
                    </div>

                    <CustomFileInput
                        name={"image"}
                        label={"პირადი ფოტოს ატვირთვა"}
                        placeholder={"ატვირთვა"}
                    />

                    <CustomTextareaInput
                        name={"aboutMe"}
                        label={"ჩემ შესახებ (არასავალდებულო)"}
                        placeholder={"ზოგადი ინფო შენ შესახებ"}
                        value={props.formData.aboutMe}
                        className={"mt-[54px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />

                    <CustomInput
                        type={"email"}
                        name={"email"}
                        label={"ელ.ფოსტა"}
                        placeholder={"anzorr666@redberry.ge"}
                        warning={"უნდა მთავრდებოდეს @redberry.ge-ით"}
                        value={props.formData.email}
                        validation={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/}
                        className={"mt-[32px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />

                    <CustomInput
                        type={"text"}
                        name={"phone"}
                        label={"მობილურის ნომერი"}
                        placeholder={"+995 551 12 34 56"}
                        warning={"უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"}
                        value={props.formData.phone}
                        validation={/^(\+995)(79\d{7}|5\d{8})$/}
                        className={"mt-[32px]"}
                        setFormData={props.setFormData}
                        formData={props.formData}
                        setDisabled={setDisabled}
                    />

                    <div className={"mt-[150px] flex justify-end"}>
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

export default FirstPage;
