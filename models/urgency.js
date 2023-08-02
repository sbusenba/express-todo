const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UrgencySchema = new Schema({
  urgency: { type: string, enum: ["1", "2", "3", "4", "5"] },
});

module.exports = mongoose.model("Urgency", UrgencySchema);
