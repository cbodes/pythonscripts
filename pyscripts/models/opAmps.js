const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opAmpSchema = new Schema(
  {
    part_number: {
      value: {type: String, lowercase: true, required: true, trim: true},
      strValue: {type: String, lowercase: true, required: true, trim: true}
    },
    gain_bandwidth: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true}
    },
    slew: {
      value: Number,
      strValue: {type: String, trim: true}
    },
    package: {
      value: {type: String,
        lowercase: true,
        trim: true,
        enum: ['dual-sided', 'single-sided']
      },
      strValue: {type: String,
        lowercase: true,
        trim: true,
        enum: ['dual-sided', 'single-sided']
      }
    },
    common_mode: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true}
    },
    max_output_current: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true}
    },
    max_overhead: {
      value: {type: Number, required: true},
      strValue: {type: String, trim: true}
    },
    location: {
      value: {type: String, uppercase: true, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    number_in_package: {
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

module.exports = mongoose.model('opAmpSchema', opAmpSchema);
