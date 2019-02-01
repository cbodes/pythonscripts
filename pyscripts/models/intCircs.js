const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const intCircSchema = new Schema(
    {
      part_number: {
        value: {type: String, uppercase: true, required: true, trim: true},
        strValue: {type: String, uppercase: true, required: true, trim: true}
      },
      category: {
        value: {type: String, lowercase: true, required: true, trim: true},
        strValue: {type: String, lowercase: true, required: true, trim: true}
      },
      voltage: {
        value: {type: Number, required: true},
        strValue: {type: String, reqired: true, trim: true}
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
      },
    }
  );


module.exports = mongoose.model('intCircSchema', intCircSchema);
