'use strict'

module.exports = (number, initialBase, newBase) =>
  parseInt(number + '', initialBase).toString(newBase)
