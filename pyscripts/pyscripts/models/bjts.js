const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bjtsSchema = new Schema(
  {
    part_number: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    doping: {
      value: {
        type: String,
        lowercase: true,
        enum: ['npn', 'pnp'],
        required: true
      },
      strValue: {
        type: String,
        uppercase: true,
        enum: ['NPN', 'PNP'],
        required: true
      }
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    beta_value: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_ic: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_vce: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_vbe: {
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
      part_number: {type: String, lowercase: true, trim: true},
      distributor: {type: String, lowercase: true, trim: true},
      quantity: Number
    }
  }
);

module.exports = mongoose.model('bjtSchema', bjtsSchema);
