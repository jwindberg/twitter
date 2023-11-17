//@ts-nocheck
import React, {useEffect} from "react";
import axios from "axios";
import {tweetsAtom} from "../atoms/store";
import {useAtom} from "jotai/index";

const Home = () => {

    const [tweets, setTweets] = useAtom(tweetsAtom);

    async function getTweets() {
        const tweets = await axios.get("http://localhost:9090/tweets", {headers: {"Access-Control-Allow-Origin": "*"}})
        setTweets(tweets.data)
    }

    useEffect(async () => {
        getTweets()
    }, [])

    return (<div className="column">
        {tweets.map(tweet => <div>{tweet.body}</div>)}
    </div>);
}

export default Home;
