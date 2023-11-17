import {atom} from "jotai/vanilla";
import Home from "../components/Home";
import React from "react";
import {INavZone} from "../types/INavZone";
import Explore from "../components/Explore";
import Notifications from "../components/Notifications";
import Messages from "../components/Messages";
import Lists from "../components/Lists";
import BookMarks from "../components/BookMarks";
import Communities from "../components/Communities";
import Verified from "../components/Verified";
import Profile from "../components/Profile";
import More from "../components/More";
import Tweet from "../components/Tweet";
import ITweet from "../types/ITweet";


export const contextAtom = atom("home");

export const navMapAtom = atom(new Map<string, INavZone>([
        ["home", {zone: "home", displayName: "Home", component: <Home/>}],
        ["explore", {zone: "explore", displayName: "Explore", component: <Explore/>}],
        ["notifications", {zone: "notifications", displayName: "Notifications", component: <Notifications/>}],
        ["messages", {zone: "messages", displayName: "Messages", component: <Messages/>}],
        ["lists", {zone: "lists", displayName: "Lists", component: <Lists/>}],
        ["bookMarks", {zone: "bookMarks", displayName: "BookMarks", component: <BookMarks/>}],
        ["communities", {zone: "communities", displayName: "Communities", component: <Communities/>}],
        ["verified", {zone: "verified", displayName: "Verified", component: <Verified/>}],
        ["profile", {zone: "profile", displayName: "Profile", component: <Profile/>}],
        ["more", {zone: "more", displayName: "More", component: <More/>}],
        ["tweet", {zone: "tweet", displayName: "Tweet", component: <Tweet/>}]
    ]
))

export const tweetsAtom = atom<Array<ITweet>>([]);