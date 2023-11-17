//@ts-nocheck
import React from "react";
import "../index.css"
import {useSetAtom} from "jotai";
import Navigation from "./Navigation";
import Body from "./Body";
import Widgets from "./Widgets";
import {contextAtom} from "../atoms/store";

const Twitter = () => {

    const setFilter = useSetAtom(contextAtom);
    return (
        <div className="container">
            <Navigation/>
            <Body/>
            <Widgets/>
        </div>
    )
}

export default Twitter;