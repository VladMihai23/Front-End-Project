class BookModel {
  constructor({id, title, author, genre, price, image_url, created_at, description}) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.image_url = image_url;
    this.created_at = created_at;
    this.description = description;
  }
}

module.exports= BookModel;