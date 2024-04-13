import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {

  constructor(){
    this.BucketListRepository = new BucketListRepository();
  }

  add = async (req, res) => {
    const { title, description, dateAdded, targetDate, isCompleted } = req.body;
    const item = new BucketListModel(
      title,
      description,
      dateAdded,
      targetDate,
      isCompleted
    );
    await this.BucketListRepository.addBucketListItem(item);
    res.status(201).send(item);
  };

  get = async (req, res) => {
    const { title } = req.query;
    const item = await this.BucketListRepository.findOneBucketListItem(title);
    // const item = await BucketListModel.findOneBucketListItem(title);
    if (!item) {
      res.status(200).send("Item not found.");
    } else {
      res.status(200).send(item);
    }
  };
}
