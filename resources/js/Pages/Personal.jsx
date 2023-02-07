import React from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";

export default function Personal(props) {
    return (
        <>
            <Head title="Personal Info" />

            <Header page={1}>
                პირადი ინფორმაცია
            </Header>
        </>
    );
}
