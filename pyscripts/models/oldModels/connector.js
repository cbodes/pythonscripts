const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectorSchema = new Schema(
  {
    num_terminals: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true, trim: true}
    },
    type: {
      value: {type: String, required: true, trim: true},
      strValue: {type: String, required: true, trim: true}
    },
    gauge: {
      value: {type: Number, required: true},
      strValue: {type: String, required: true, trim: true}
    },
    meta: {
      part_number: {type: String, trim: true, lowercase: true},
      distributor: {type: String, trim: true, lowercase: true},
      quantity: Number
    }
  }
);

module.exports = mongoose.model('connectorSchema', connectorSchema);
