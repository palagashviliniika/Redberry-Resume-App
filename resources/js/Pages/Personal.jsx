import React, {useEffect, useState} from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import CustomInput from "@/Components/CustomInput";
import CustomFileInput from "@/Components/CustomFileInput";
import CustomTextareaInput from "@/Components/CustomTextareaInput";
import Resume from "@/Components/Resume";
import CustomButton from "@/Components/CustomButton";
import FirstPage from "@/Components/FirstPage";
import SecondPage from "@/Components/SecondPage";
import ThirdPage from "@/Components/ThirdPage";

export default function Personal(props) {
    const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem("formData")) ||
        {
            firstName: "",
            lastName: "",
            image: "",
            aboutMe: "",
            email: "",
            phone: "",
            position: "",
            employer: "",
            startDate: "",
            endDate: "",
            description: "",
            school: "",
            degree: "",
            gradDate: "",
            schoolDescription: ""
        }
    )

    const [page, setPage] = useState(1)
    const [degrees, setDegrees] = useState([])

    useEffect(() => {
        let subscribed = true
        fetch("https://resume.redberryinternship.ge/api/degrees")
            .then(res => res.json())
            .then(data => {
                if(subscribed){
                    setDegrees(data)
                }
            })

        return () => {
            subscribed = false
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))
    }, [formData])

    const nextPage = (event) => {
        event.preventDefault()
        setPage(prevPage => prevPage + 1)
    }

    const previousPage = (event) => {
        event.preventDefault()
        setPage(prevPage => prevPage - 1)
    }

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

                {
                    page === 1 &&
                    <FirstPage
                        formData={formData}
                        setFormData={setFormData}
                        page={page}
                        nextPage={nextPage}
                    />
                }

                {
                    page === 2 &&
                    <SecondPage
                        formData={formData}
                        setFormData={setFormData}
                        page={page}
                        nextPage={nextPage}
                        previousPage={previousPage}
                    />
                }

                {
                    page === 3 &&
                        <ThirdPage
                            formData={formData}
                            setFormData={setFormData}
                            page={page}
                            nextPage={nextPage}
                            previousPage={previousPage}
                            degrees={degrees}
                        />
                }


                <div className={"w-2/4 pr-[75px]"}>
                    <Resume
                        formData={formData}
                        degrees={degrees}
                    />
                </div>
            </div>
        </>
    );
}
