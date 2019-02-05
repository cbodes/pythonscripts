const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema(
  {
    date_out: {
      value: {type: Date, default: Date.now},
      strValue: {type: Date, default: Date.now},
    },
    // Name of the type of equipment
    name: {
      value: {type: String, trim: true, lowercase: true},
      strValue: {type: String, trim: true}
    },

    // objectId of the equipment saved
    borrowerIds: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'idSwipeScehma'}
    ],
    /*
    item: {
      value: {type: mongoose.Schema.Types.ObjectId, ref: 'equipment'},
      strValue: {type: mongoose.Schema.Types.ObjectId, ref: 'equipment'}
    },
    */
    barcodes: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'barcodeReadSchema'}
    ],
    // TODO model_number and serial_number ideally become virutal fields from barcode
    model_number: {
      value: {type: String, uppercase: true, trim: true},
      strValue: {type: String, uppercase: true, trim: true}
    },
    serial_number: {
      value: {type: String, uppercase: true, trim: true},
      strValue: {type: String, uppercase: true, trim: true}
    },
    date_back: {
      value: {type: Date},
      strValue: {type: Date}
    },
    date_returned: {
      value: {type: Date},
      strValue: {type: Date},
    },
    checked_out: {
      value: {type: Boolean, default: true},
      strValue: {type: Boolean, default: true}
    }
  },
  {
    toObject: {virtuals: true},
    // Adding this toJSON prop makes it so a virtual called 'id' is created which is equal to `_id.toString()`.
    // Nothing seems to be out of the ordinary though.
    toJSON: {virtuals: true},
  },
);

module.exports = mongoose.model('checkoutSchema', checkoutSchema);
