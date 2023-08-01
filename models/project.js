const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  due: { type: Date, required: true },
  urgency: { type: Schema.Types.ObjectId, ref: "Urgency", required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "ToDoItem" }],
});

ToDoItemSchema.virtual("url").get(function () {
  return `/todo/items/${this._id}`;
});

module.exports = mongoose.model("Project", ProjectSchema);
