import express from "express";
import ArtPieceController from "../artPiece/artPiece.controller.js"

const router = express.Router();

const artPieceController = new ArtPieceController();

// All the paths to the controller methods.
// localhost/api/products 
// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1

router.get(
    '/filter',
artPieceController.filterArtPieces 
);

router.get(
    '/', 
artPieceController.getAllArtPieces
);

router.post(
    '/', 
artPieceController.addArtPiece
);

router.get(
    '/:id',
artPieceController.getOneArtPiece
);

router.delete(
    '/:id',
artPieceController.deleteArtPieces
);

router.put(
    '/:id',
artPieceController.updateArtPieces
);

export default router;






