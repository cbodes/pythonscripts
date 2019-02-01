var bjts = require('./bjts.js');

var capacitors = require('./capacitors.js');

var checkout = require('./checkout.js');

var diodes = require('./diodes.js');

var equipment = require('./equipment.js');

var inductors = require('./inductors.js');

var intCircs = require('./intCircs.js');

var linRegs = require('./linReg.js');

var mosfets = require('./mosfets.js');

var opAmps = require('./opAmps.js');

var resistors = require('./resistors.js');

var puid_swipes = require('./puid_swipes.js');

var barcode_reads = require('./barcode_reads.js');

var user = require('./users.js');

var switches = require('./switches.js');

module.exports = {
  bjt: bjts,
  capacitor: capacitors,
  connector: require('./connector.js'),
  checkout: checkout,
  diode: diodes,
  equipment: equipment,
  inductor: inductors,
  intcirc: intCircs,
  linreg: linRegs,
  fet: mosfets,
  opamp: opAmps,
  resistor: resistors,
  idswipe: puid_swipes,
  barcoderead: barcode_reads,
  user: user,
  switch: switches
};
