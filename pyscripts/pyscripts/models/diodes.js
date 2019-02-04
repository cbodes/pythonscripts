const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diodeSchema = new Schema(
  {
    part_number: {type: Object, required: true, trim: true, lowercase: true},
    type: {
      value: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
      },
      strValue: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
      }
    },
    forward_voltage_drop: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    breakdown_voltage: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    max_current: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    power: {
      value: Number,
      strValue: {type: String, trim: true}
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
      part_number: {type: String, trim: true, lowercase: true},
      distributor: {type: String, trim: true, lowercase: true},
      quantity: Number
    }
  }
);

module.exports = mongoose.model('Diode', diodeSchema);
