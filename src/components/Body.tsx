/** @jsxImportSource jotai-signal */
//@ts-nocheck
import React from "react";
import Home from "./Home";
import Profile from "./Profile";

import {context} from "./Twitter";
import {useAtom} from "jotai/index";
import INavZone from "../types/INavZone";
import Explore from "./Explore";
import Notifications from "./Notifications";
import Messages from "./Messages";
import More from "./More";
import Tweet from "./Tweet";

const Body = () => {

    const [useContext, setContext] = useAtom(context);

    const navMap = new Map<string, INavZone>();

    navMap.set("home", {zone: "home", displayName: "Home", component: <Home/>});
    navMap.set("explore", {zone: "explore", displayName: "Explore", component: <Explore/>});
    navMap.set("notifications", {zone: "notifications", displayName: "Notifications", component: <Notifications/>});
    navMap.set("messages", {zone: "messages", displayName: "Messages", component: <Messages/>});
    navMap.set("profile", {zone: "profile", displayName: "Profile", component: <Profile/>});
    navMap.set("tweet", {zone: "tweet", displayName: "Tweet", component: <Tweet/>});
    navMap.set("more", {zone: "more", displayName: "More", component: <More/>});


    function getHome() {
        return <Home/>
    }

    function getProfile() {
        return <Profile/>
    }

    function getBody() {
        const bodyContent = navMap[useContext].component;
        return <div className="column">
            {bodyContent}
        </div>;
    }

    return getBody();
};

export default Body;
