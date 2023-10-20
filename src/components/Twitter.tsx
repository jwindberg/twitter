//@ts-nocheck
import React from "react";
import "../index.css"
import {atom} from "jotai/vanilla";
import {useSetAtom} from "jotai";
import Navigation from "./Navigation";
import Body from "./Body";
import Widgets from "./Widgets";
import INavZone from "../types/INavZone";
import Home from "./Home";
import Explore from "./Explore";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Lists from "./Lists";
import BookMarks from "./BookMarks";
import Communities from "./Communities";
import Verified from "./Verified";
import Profile from "./Profile";
import More from "./More";
import Tweet from "./Tweet";


const context = atom("home");
const navMap = atom(new Map<string, INavZone>([
        ["home", {zone: "home", displayName: "Home", zone: <Home/>}],
        ["explore", {zone: "explore", displayName: "Explore", zone: <Explore/>}],
        ["notifications", {zone: "notifications", displayName: "Notifications", zone: <Notifications/>}],
        ["messages", {zone: "messages", displayName: "Messages", zone: <Messages/>}],
        ["lists", {zone: "lists", displayName: "Lists", zone: <Lists/>}],
        ["bookMarks", {zone: "bookMarks", displayName: "BookMarks", zone: <BookMarks/>}],
        ["communities", {zone: "communities", displayName: "Communities", zone: <Communities/>}],
        ["verified", {zone: "verified", displayName: "Verified", zone: <Verified/>}],
        ["profile", {zone: "profile", displayName: "Profile", zone: <Profile/>}],
        ["more", {zone: "more", displayName: "More", zone: <More/>}],
        ["tweet", {zone: "tweet", displayName: "Tweet", zone: <Tweet/>}]
    ]
))
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

export {context, navMap};
export default Twitter;