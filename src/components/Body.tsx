/** @jsxImportSource jotai-signal */
//@ts-nocheck
import React from "react";
import Home from "./Home";
import {context} from "./Twitter";
import {useAtom} from "jotai/index";
import Profile from "./Profile";

const Body = () => {

    const [useContext, setContext] = useAtom(context);

    function getHome() {
        return <Home/>
    }

    function getProfile() {
        return <Profile/>
    }

    function getBody() {
        const bodyContent = useContext === "home" ? getHome() : getProfile();
        return <div className="column">
            {bodyContent}
        </div>;
    }

    return getBody();
}

export default Body;
