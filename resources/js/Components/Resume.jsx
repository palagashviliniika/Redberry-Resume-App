import React from 'react';

const Resume = (props) => {


    return (
        <div className={"h-full flex flex-col"}>
            <div className={"mt-[68px] flex"}>
                <div>
                    <div className={"flex gap-[20px] font-bold text-[34px] text-customOrange"}>
                        <h1>{props.formData?.firstName}</h1>
                        <h1>{props.formData?.lastName}</h1>
                    </div>

                    <div className={"mt-[18px] flex items-center gap-[10px]"}>
                        {props.formData.email && <img src="./images/email.svg"/>}
                        <p className={"text-customBlack text-[18px]"}>{props.formData?.email}</p>
                    </div>

                    <div className={"mt-[18px] flex items-center gap-[10px]"}>
                        {props.formData.phone && <img src="./images/phone.svg"/>}
                        <p className={"text-customBlack text-[18px]"}>{props.formData?.phone}</p>
                    </div>

                    <div className={"w-[500px]"}>
                        {props.formData.aboutMe && <h5 className={"mt-[34px] font-bold text-[18px] text-customOrange"}>ჩემ შესახებ</h5>}
                        <p className={"mt-[15px] text-customBlack text-base]"}>{props.formData?.aboutMe}</p>
                    </div>
                </div>


                <div className={"w-[246px] h-[246px] bg-gray-400 rounded-full"}>

                </div>
            </div>

            {
                props.formData.position && <hr className={"h-px w-full bg-gray-200 border-0 dark:bg-customBlack-gray my-[20px]"}/>
            }

            <div>
                {props.formData.position && <h5 className={"mt-[34px] font-bold text-[18px] text-customOrange"}>გამოცდილება</h5>}
                <div className={"mt-[15px] font-medium text-customBlack text-base flex"}>
                    <p>{props.formData?.position}</p>
                    {props.formData.employer && <p>, {props.formData.employer}</p>}
                </div>
            </div>

            <div className={"flex gap-[4px] italic text-base text-customBlack-date"}>
                <h1>{props.formData?.startDate}</h1>
                {props.formData.endDate && <h1>- {props.formData?.endDate}</h1>}
            </div>

            <div>
                <p className={"mt-[16px]"}>{props.formData?.description}</p>
            </div>

            {
                props.formData.school && <hr className={"h-px w-full bg-gray-200 border-0 dark:bg-customBlack-gray my-[20px]"}/>
            }

            <div>
                {props.formData.school && <h5 className={"mt-[34px] font-bold text-[18px] text-customOrange"}>განათლება</h5>}
                <div className={"mt-[15px] font-medium text-customBlack text-base flex"}>
                    <p>{props.formData?.school}</p>
                    {props.formData.degree && <p>, {props.degrees[props.formData.degree.text-1] }</p>}
                </div>
            </div>

            <div>
                <p className={"mt-[16px]"}>{props.formData?.schoolDescription}</p>
            </div>

            <div className={"justify-end"}>
                <img src={"./images/LogoCV.svg"}/>
            </div>

        </div>

    );
};

export default Resume;
