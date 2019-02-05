const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema(
  {
    item:{
      value: {type: String, lowercase: true, required: true, trim: true},
      strValue: {type: String, required: true, trim: true}
    },
    manufacturer: {
      value: {type: String, required: true, trim: true},
      strValue: {type: String, required: true, trim: true}
    },
    model_number: {
      value: {type: String, required: true, trim: true},
      strValue: {type: String, uppercase: true, required: true, trim: true}
    },
    serial_number: {
      value: {type: String, required: true, trim: true},
      strValue: {type: String, required: true, trim: true}
    },
    // Is this model+serial number checkoutable at all, over the lifetime,
    // irrespective of whether it is currently checked out.
    is_checkout_restricted: {
      value: {type: Boolean, trim: true, default: false},
      strValue: {type: String, trim: true, default: false},
    },
    // Is this item currently available to be checked out
    // TODO make into a virtual field composed from is_checked_out and is_checkout_restricted
    is_checkoutable: {
      value: {type: Boolean, trim: true, default: true},
      strValue: {type: String, trim: true, default: true},
    },

    // require if item is Oscope
    number_channels: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'oscilloscope';}
      },
      strValue: {type: String, trim: true}
    },
    number_digital_channels: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'oscilloscope';}
      },
      strValue: {type: String, trim: true}
    },
    frequency: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'oscilloscope';}
      },
      strValue: {type: String, trim: true}
    },
    sample_frequency: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'oscilloscope';}
      },
      strValue: {type: String, trim: true}
    },

    // require if item is DMM
    resolution: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'digital multimeter';}
      },
      strValue: {type: String, trim: true},
    },
    accuracy: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'digital multimeter';}
      },
      strValue: {type: String, trim: true},
    },

    // require if Function Gen
    max_frequency: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'function generator';}
      },
      strValue: {type: String, trim: true}
    },
    max_current: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'function generator';}
      },
      strValue: {type: String, trim: true}
    },

    // require if PSU
    max_power: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'power supply';}
      },
      strValue: {type: String, trim: true}
    },
    max_current: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'power supply';}
      },
      strValue: {type: String, trim: true}
    },
    max_voltage: {
      value: {
        type: Number,
        required: function() {return this.item.value === 'power supply';}
      },
      strValue: {type: String, trim: true}
    },
    ripple: {
      value: {
        type: Number,
        //required: function() {return this.item.value === 'power supply';}
      },
      strValue: {type: String, trum: true}
    }

    //lcr_meter
  }
);

module.exports = mongoose.model('equipmentSchema', equipmentSchema);
