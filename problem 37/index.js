import express from "express";
import tweetRouter from './src/features/tweet/tweet.routes.js';

const app = express();

app.use("/api/tweets", tweetRouter);

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});

export default app;