const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// TODO naming convention
// TODO Aliases for that value and strValue problem
const idSwipesSchema = new Schema({
  puid: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  email: {
    // Source: https://stackoverflow.com/a/24214767/
    type: String,
    trim: true,
    lowercase: true,
    required: "Email address is required",
    // validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/,
      "Please fill a valid email address"
    ]
  },
  notes: { type: String }
  },
  {
    toObject: {virtuals: true},
    // Adding this toJSON prop makes it so a virtual called 'id' is created which is equal to `_id.toString()`.
    // Nothing seems to be out of the ordinary though.
    toJSON: {virtuals: true},
  },
);
idSwipesSchema.virtual('swipe').
  get(function() { return this.email + ' ' + this.puid; }).
  set(function(v) {
    this.email = v.substr(0, v.indexOf(' '));
    this.puid = v.substr(v.indexOf(' ') + 1);
  });

module.exports = mongoose.model("idSwipesSchema", idSwipesSchema);
