const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const switchSchema = new Schema(
  {
    use: {
      value: {type: String, lowercase: true, trim: true, required: true},
      strValue: {type: String, lowercase: true, trim: true, required: true}
    },
    current_rating: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    datasheet: {
      value: {type: String, trim: true},
      strValue: {type: String, trim: true}
    },
    meta: {
      part_number: {type: String, lowercase: true, trim: true},
      distributor: {type: String, lowercase: true, trim: true},
      quantity: Number
    }
  }
);

module.exports = mongoose.model('switch', switchSchema);
