//@ts-nocheck
import React from "react";
import "../index.css";
import {contextAtom, navMapAtom} from "../atoms/store";
import {useAtom} from "jotai/index";

const Navigation = () => {
    const [context, setContext] = useAtom(contextAtom)
    const [navMap] = useAtom(navMapAtom);

    function buildNav() {

        const nav = [];
        navMap.forEach((value, key) => {

            const className = context === key ? "highlight-text" : "text-only";

            nav.push(<li key={key}>
                <button className={className} onClick={() => setContext(key)}>{value.displayName}</button>
            </li>);
        });

        return nav;
    }

    return (<div className="column">
        <ul>
            {buildNav()}
        </ul>
    </div>);
}

export default Navigation;
