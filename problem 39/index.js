import express from "express";
import bodyParser from 'body-parser';
const app = express();
import artPieceRouter from './src/features/artPiece/artPiece.routes.js';
// TODO: require your artPieceRoutes here
// const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

// TODO: use your artPieceRoutes with a proper endpoint
app.use("/api/artPieces", artPieceRouter);

export default app;
