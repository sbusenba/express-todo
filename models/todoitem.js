const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ToDoItemSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  due: { type: Date, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

ToDoItemSchema.virtual("url").get(function () {
  return `/todo/items/${this._id}`;
});

module.exports = mongoose.model("ToDoItem", ToDoItemSchema);
