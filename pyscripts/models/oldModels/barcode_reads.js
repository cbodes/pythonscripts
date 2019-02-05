const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const barcodeReadSchema = new Schema(
    {
      barcode: {type: String, required: true},
      // barcode: {
        // value: {type: String, required: true},
        // strValue: {type: String, required: true},
      // },
      timestamp: {type: Date, default: Date.now},
      notes: {type: String},
      // timestamp: {
      //   value: {type: Date, default: Date.now},
      //   strValue: {type: Date, default: Date.now},
      // },
    }
  );

module.exports = mongoose.model('barcodeReadSchema', barcodeReadSchema);

