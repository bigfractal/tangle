import React from 'react';
import ReactDOM from 'react-dom';
import {Outlet} from "react-router-dom";
import BfNav from "./BfNav";
import BfFooter from "./BfFooter";

export default function BfParent() {
    return (
        <>
            <BfNav />
            <main id="mainView">
                <Outlet />
            </main>
            <BfFooter />
        </>
    );
}