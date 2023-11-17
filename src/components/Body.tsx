//@ts-nocheck
import React from "react";
import Home from "./Home";
import Profile from "./Profile";

import {useAtom} from "jotai/index";
import {contextAtom, navMapAtom} from "../atoms/store";

const Body = () => {

    const [useContext, setContext] = useAtom(contextAtom);


    const [useNavMap, setNavMap] = useAtom(navMapAtom);

    // useNavMap.set("home", {zone: "home", displayName: "Home", zone: <Home/>});


    function getHome() {
        return <Home/>
    }

    function getProfile() {
        return <Profile/>
    }

    function getBody() {
        const bodyContent = useNavMap.get(useContext).component;
        return <div className="column">
            {bodyContent}
        </div>;
    }

    return getBody();
};

export default Body;
