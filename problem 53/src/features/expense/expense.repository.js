import {ObjectId} from 'mongodb';
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collection = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) { 
      const db = getDB();
      const collection = db.collection(this.collection);
      await collection.insertOne(expense);
      return expense;
  }

  // Get one expnese by its ID
  async getOne(id) {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.findOne({_id: new ObjectId(id)});
  }

  // Get all expenses
  async getAllExpenses() {
      const db = getDB();
      const collection = db.collection(this.collection);
      const expenses = await collection.find().toArray();
      console.log(expenses);
      return expenses;
  }

  // Add tag to an expense
  async addTagToExpense(id, tags) {
    const db = getDB();
    const collection = db.collection(this.collection);
    await collection.updateOne(
        { _id: new ObjectId(id) },
        { $push: { tags: { uid: new ObjectId(id), tags } } }
    );
  }
  
  
  async filterExpenses(minAmount, maxAmount, isRecurring) {
    const db = getDB();
    const collection = db.collection(this.collection);
    let filterExpression = {};
    
    if (minAmount) {
        filterExpression.amount = { $gte: parseFloat(minAmount) };
    }
    
    if (maxAmount) {
        // Use $gte and $lte for both conditions
        filterExpression.amount = {
            ...filterExpression.amount,
            $lte: parseFloat(maxAmount),
        };
    }
    
    if (isRecurring) {
        filterExpression.isRecurring = isRecurring;
    }
    
    return await collection.find(filterExpression).toArray();
  }
}

export default ExpenseRepository;