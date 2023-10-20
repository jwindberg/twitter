//@ts-nocheck
import React from "react";
import Home from "./Home";
import Profile from "./Profile";

import {context, navMap} from "./Twitter";
import {useAtom} from "jotai/index";

const Body = () => {

    const [useContext, setContext] = useAtom(context);

    // const navMap = new Map<string, INavZone>([
    //         ["home", {zone: "home", displayName: "Home", zone: <Home/>}],
    //         ["explore", {zone: "explore", displayName: "Explore", zone: <Explore/>}],
    //         ["notifications", {zone: "notifications", displayName: "Notifications", zone: <Notifications/>}],
    //         ["messages", {zone: "messages", displayName: "Messages", zone: <Messages/>}],
    //         ["lists", {zone: "lists", displayName: "Lists", zone: <Lists/>}],
    //         ["bookMarks", {zone: "bookMarks", displayName: "BookMarks", zone: <BookMarks/>}],
    //         ["communities", {zone: "communities", displayName: "Communities", zone: <Communities/>}],
    //         ["verified", {zone: "verified", displayName: "Verified", zone: <Verified/>}],
    //         ["profile", {zone: "profile", displayName: "Profile", zone: <Profile/>}],
    //         ["more", {zone: "more", displayName: "More", zone: <More/>}],
    //         ["tweet", {zone: "tweet", displayName: "Tweet", zone: <Tweet/>}]
    //     ]
    // );

    const [useNavMap, setNavMap] = useAtom(navMap);

    // useNavMap.set("home", {zone: "home", displayName: "Home", zone: <Home/>});


    function getHome() {
        return <Home/>
    }

    function getProfile() {
        return <Profile/>
    }

    function getBody() {
        const bodyContent = useNavMap.get(useContext).zone;
        return <div className="column">
            {bodyContent}
        </div>;
    }

    return getBody();
};

export default Body;
