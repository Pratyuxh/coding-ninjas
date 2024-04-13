import ArtPiece from "../artPiece/artPiece.model.js"

export default class ProductController{

    getAllArtPieces(req,res){
        const artPieces = ArtPiece.getAll();
        res.status(200).send(artPieces);
    }

    addArtPiece(req, res){
        const {title, artist, year, imageUrl} = req.body;
        const newArtPiece = {
            title,
            artist,
            year,
            imageUrl
        };
        const createdRecord=ArtPiece.add(newArtPiece);
        res.status(201).send(createdRecord);
    }

    updateArtPieces(req, res){
        const id = req.params.id;
        // const artPiece = ArtPiece.get(id); 
        const updated = ArtPiece.update(id, req.body)
        if (updated == -1) {
            res.status(404).json({ success: false, message: 'Art piece not found' });
        } else {
            // return res.json({ success: true, message: updated });
            return res.status(200).send(updated);
        }
    }

    getOneArtPiece(req,res){
        const id = req.params.id;
        const artPiece = ArtPiece.get(id);
        if(!artPiece){
            res.status(404).json({ success: "true", msg: "Art piece not found" });
        } else{
            return res.status(200).send(artPiece);
        }
    }

    filterArtPieces(req, res) {
        const minYear = req.query.minYear;
        const maxYear = req.query.maxYear;
        const artist = req.query.artist;
        const result = ArtPiece.filter(
            minYear,
            maxYear,
            artist
        );
        res.status(200)
        .json({ success: "true", msg: result });
    }

    deleteArtPieces(req, res){
        const id= req.params.id;
        const error = ArtPiece.delete(id);
        if(error){
            return res.status(404).send(error);
        }
        return res.status(200).send('Art piece is removed');
    }

    
} 