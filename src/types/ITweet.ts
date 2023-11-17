import {z} from "zod";

const TweetSchema = z.object({
    name: z.string(),
    handle: z.string(),
    publishTime: z.string(),
    body: z.string(),
    numReplies: z.number(),
    numReposts: z.number(),
    numLikes: z.number(),
    numViews: z.number(),
});

// This function validates the data and infers the 'User' type from the Zod schema
export // Function that checks if the data matches the User schema
function isTweet(data: any): data is ITweet {
    return TweetSchema.safeParse(data).success;
}


export default interface ITweet {
    name: string
    handle: string
    publishTime: string
    body: string
    numReplies: number
    numReposts: number
    numLikes: number
    numViews: number
}
