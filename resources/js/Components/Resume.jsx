import React from 'react';

const Resume = (props) => {
    return (
        <div className={"mt-[68px] flex"}>
            <div>
                <div className={"flex gap-[20px] font-bold text-[34px] text-customOrange"}>
                    <h1>{props.formData?.firstName.text}</h1>
                    <h1>{props.formData?.lastName.text}</h1>
                </div>

                <div className={"mt-[18px] flex items-center gap-[10px]"}>
                    {props.formData.email.text && <img src="./images/email.svg"/>}
                    <p className={"text-customBlack text-[18px]"}>{props.formData?.email.text}</p>
                </div>

                <div className={"mt-[18px] flex items-center gap-[10px]"}>
                    {props.formData.phone.text && <img src="./images/phone.svg"/>}
                    <p className={"text-customBlack text-[18px]"}>{props.formData?.phone.text}</p>
                </div>

                <div className={"w-[500px]"}>
                    {props.formData.aboutMe.text && <h5 className={"mt-[34px] font-bold text-[18px] text-customOrange"}>ჩემ შესახებ</h5>}
                    <p className={"text-customBlack text-[18px]"}>{props.formData?.aboutMe.text}</p>
                </div>
            </div>


            <div className={"w-[246px] h-[246px] bg-gray-400 rounded-full"}>

            </div>

        </div>
    );
};

export default Resume;
