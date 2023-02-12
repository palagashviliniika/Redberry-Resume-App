import React from 'react';
import {Link} from "@inertiajs/react";

const Header = (props) => {
    return (
        <div className={"mt-[48px]"}>
            <div className={"header flex justify-between pl-[48px] items-center"}>

                <div className={"flex space-x-[60px] items-center"}>
                    <Link href={"/"}>
                        <div className={"h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center"}>
                            <img src="./images/Vector.svg" alt=""/>
                        </div>
                    </Link>

                    <h1 className={"text-2xl"}>
                        {props.children}
                    </h1>
                </div>

                <div className={"font-[200]"}>{props.page}/3</div>
            </div>
            <hr className={"h-px bg-gray-200 border-0 dark:bg-gray-700 my-[12px] ml-[150px]"}/>
        </div>

    );
};

export default Header;
