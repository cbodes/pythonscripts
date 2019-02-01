const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CapSchema = new Schema(
  {
    value: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true, trim: true}
    },
    tolerance: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    voltage_rating: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    package: {
      value: {type: String, lowercase: true, required: true},
      strValue: {type: String, lowercase: true, required: true}
    },
    location: {
      value: {type: String, required: true, trim: true, uppercase: true},
      strValue: {type: String, required: true, trim: true, uppercase: true}
    },
    material: {
      value: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['ceramic', 'electrolytic', 'tantalum']
      },
      strValue: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['ceramic', 'electrolytic', 'tantalum']
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

module.exports = mongoose.model('CapSchema', CapSchema);
