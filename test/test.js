/* global describe, it */
'use strict'

const expect = require('chai').expect
const changeNumberBase = require('../index')

describe('#changeNumberBase()', () => {
  it('should work from base 2 to base 10', () => {
    const number = 1010
    const initialBase = 2
    const newBase = 10
    const result = changeNumberBase(number, initialBase, newBase)
    const expected = '10'
    expect(result).to.equal(expected)
  })

  it('should work from base 2 to base 16', () => {
    const number = 10000
    const initialBase = 2
    const newBase = 16
    const result = changeNumberBase(number, initialBase, newBase)
    const expected = '10'
    expect(result).to.equal(expected)
  })

  it('should work from base 3 to base 10', () => {
    const number = 102
    const initialBase = 3
    const newBase = 10
    const result = changeNumberBase(number, initialBase, newBase)
    const expected = '11'
    expect(result).to.equal(expected)
  })

  it('should work from base 10 to base 36', () => {
    const number = 1001
    const initialBase = 10
    const newBase = 36
    const result = changeNumberBase(number, initialBase, newBase)
    const expected = 'rt'
    expect(result).to.equal(expected)
  })

  it('should work from base 16 to base 2', () => {
    const number = 'ff0000'
    const initialBase = 16
    const newBase = 2
    const result = changeNumberBase(number, initialBase, newBase)
    const expected = '111111110000000000000000'
    expect(result).to.equal(expected)
  })
})
