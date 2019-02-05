const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResistorSchema = new Schema(
  {
    value: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true, trim: true}
    },
    tolerance: {
      value: {type: Number, required: true},
      strValue: {type: String, lowercase: true, required: true, trim: true}
    },
    power: {
      value: {type: Number, required: true},
      strValue: {type: String, lowercase: true, required: true, trim: true}
    },
    package: {
      value: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
      },
      strValue: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
      }
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

module.exports = mongoose.model('ResistorSchema', ResistorSchema);
