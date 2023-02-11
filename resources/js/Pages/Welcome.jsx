import { Link, Head } from '@inertiajs/react';
import CustomButton from "@/Components/CustomButton";

export default function Welcome(props) {
    console.log(props)
    return (
        <>
            <Head title="Welcome" />
            <div className={"welcomePage"}>
                <img
                    src={"./images/LOGO.svg"}
                    className={"my-[26px]"}
                />
                <hr className={"h-px bg-gray-200 border-0 dark:bg-gray-700"}/>
                <div
                className={"flex items-center justify-center h-full w-full"}
                >
                    <img
                        src={"./images/LOGO2.svg"}
                        className={"absolute -mr-[470px] mt-[150px]"}
                    />
                    <Link href={"/personal"} className={"py-[18px] px-[126px] text-white bg-customBlack rounded-[8px] cursor-pointer z-10"}>რეზიუმეს დამატება</Link>
                </div>
            </div>
        </>
    );
}
