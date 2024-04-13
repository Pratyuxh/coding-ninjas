import { getDB } from "../../config/mongodb.js";

export default class ConfessionModel {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  static async create(title, body, author) {
    try {
    const db = getDB();
    const collection = db.collection("confession");
    const newConfession = new ConfessionModel(
      title,
      body,
      author
    );
    await collection.insertOne(newConfession);
    return newConfession;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
