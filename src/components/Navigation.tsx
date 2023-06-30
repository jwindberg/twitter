/** @jsxImportSource jotai-signal */
//@ts-nocheck
import React from "react";
import {useSetAtom} from "jotai";
import {context} from "./Twitter";
import "../index.css";

const Navigation = () => {

    const setFilter = useSetAtom(context);

    return (<div className="column">
        <ul>
            <li>
                <button className="text-only" onClick={() => setFilter("home")}>Home</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("explore")}>Explore</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("notifications")}>Notifications</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("messages")}>Messages</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("lists")}>Lists</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("bookMarks")}>BookMarks</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("communities")}>Communities</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("verified")}>Verified</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("profile")}>Profile</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("more")}>More</button>
            </li>
            <li>
                <button className="text-only" onClick={() => setFilter("tweet")}>Tweet</button>
            </li>
        </ul>
    </div>);
}

export default Navigation;
