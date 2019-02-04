const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linRegSchema = new Schema(
  {
    part_number: {
      value: {type: String, lowercase: true, required: true, trim: true},
      strValue: {type: String, lowercase: true, required: true, trim: true}
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    category: {
      value: {
        type: String,
        lowercase: true,
        trim: true,
        enum: ['fixed', 'adjustable'],
        required: true
      },
      strValue: {
        type: String,
        lowercase: true,
        trim: true,
        enum: ['fixed', 'adjustable'],
        required: true
      }
    },
    voutmax: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    vdropout: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    power: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    datasheet: {
      value: {type: String, trim: true},
      strValue: {type: String, trim: true}
    },
    meta: {
      part_number: {type: String, trim: true, lowercase: true},
      distributor: {type: String, trim: true, lowercase: true},
      quantity: Number
    }
  }
);

module.exports = mongoose.model('linRegSchema', linRegSchema);
