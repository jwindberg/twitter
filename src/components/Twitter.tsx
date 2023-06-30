/** @jsxImportSource jotai-signal */
//@ts-nocheck
import React from "react";
import "../index.css"
import {atom} from "jotai/vanilla";
import {useSetAtom} from "jotai";
import Navigation from "./Navigation";
import Body from "./Body";
import Widgets from "./Widgets";


const context = atom("home");
const Twitter = () => {

    const setFilter = useSetAtom(context);
    return (
        <div className="container">
            <Navigation/>
            <Body/>
            <Widgets/>
        </div>
    )
}

export {context};
export default Twitter;