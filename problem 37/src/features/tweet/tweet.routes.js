// 1. Import express.
import express from 'express';
import { getTweets, createTweet } from './tweet.controller.js';
// import TweetController from './tweet.controller.js';

// 2. Initialize Express router.
const tweetRouter = express.Router();
// const tweetController = new TweetController();
// All the paths to controller methods.

tweetRouter.get('/', getTweets);
tweetRouter.post('/', createTweet);

export default tweetRouter;
