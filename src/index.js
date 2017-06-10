var uniqueRandomArray = require('unique-random-array');
var composerNames = require('./composer-names.json');

module.exports = {
  all: composerNames,
  random: uniqueRandomArray(composerNames)
};

