export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static add(artPiece){
    artPiece.id = artPieces.length + 1;
    artPieces.push(artPiece);
    return artPiece;
  }

  static get(id){
    const artPiece = artPieces.find((i)=>i.id ==id);
    return artPiece;
  }

  //sidak helped 13 DEC 2023 2:42AM
  static update(id, obj){
    const artPiece = artPieces.find((i)=>i.id ==id);
    if(artPiece == -1){
      return -1;
    }else{
      artPiece.title = obj.title;
      artPiece.artist = obj.artist;
      artPiece.year = obj.year;
      artPiece.imageUrl = obj.imageUrl;
      return artPiece;
    }
  }

  static getAll(){
      return artPieces;
  }

  static filter(minYear, maxYear, artist){
    const result = artPieces.filter((artPiece)=>{
      return(
      (!minYear || 
        artPiece.year >= minYear) &&
      (!maxYear || 
        artPiece.year <= maxYear) &&
      (!artist || 
        artPiece.artist == artist)
      );
    });
    return result;
  }

  static delete(id){
    const artPieceIndex = artPieces.findIndex(i=> i.id==id);
    if(artPieceIndex == -1){
        return 'Art piece not found';
    }else{
        artPieces.splice(artPieceIndex, 1);
    }
  }

}

var artPieces = [
    new ArtPiece(
      1,
      'ArtPiece 1',
      'SRK',
      2023,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ArtPiece(
      2,
      'ArtPiece 2',
      'RK',
      2023,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ArtPiece(
      3,
      'ArtPiece 3',
      'Salman',
      2023,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    )];