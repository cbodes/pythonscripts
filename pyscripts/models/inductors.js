const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const IndSchema = new Schema(
  {
    value: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true, required: true}
    },
    tolerance: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true, required: true}
    },
    power: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true, required: true}
    },
    saturation_current: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true, required: true}
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    package: {
      value: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        enum: ['through-hole', 'surface mount']
      },
      strValue: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
      }
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

module.exports = mongoose.model('IndSchema', IndSchema);
