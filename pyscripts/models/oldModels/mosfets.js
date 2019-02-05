const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mosfetSchema = new Schema(
  {
    part_number: {
      value: {type: String, lowercase: true, retuired: true, trim: true},
      strValue: {type: String, lowercase: true, retuired: true, trim: true}
    },
    doping: {
      value: {
        type: String,
        lowercase: true,
        enum: ['n-channel', 'p-channel'],
        required: true
      },
      strValue: {
        type: String,
        lowercase: true,
        enum: ['n-channel', 'p-channel'],
        required: true
      }
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    conductance: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    gain: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_id: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_vds: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    max_vgs: {
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

module.exports = mongoose.model('mosfetSchema', mosfetSchema);
