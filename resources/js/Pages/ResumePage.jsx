import React, {useState} from 'react';
import Resume from "@/Components/Resume";

const ResumePage = () => {
    const [formData, setFormData] = useState(
        () => JSON.parse(localStorage.getItem("formData"))
    )
    return (
        <div className={"w-2/4 pr-[75px]"}>
            <Resume
                formData={formData}
                degrees={degrees}
            />
        </div>
    );
};

export default ResumePage;
