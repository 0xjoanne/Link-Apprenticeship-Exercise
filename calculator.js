'use strict'

const categoryMap = {
  food: 0.13,
  drugs: 0.075,
  electronics: 0.02,
  other: 0
}

const error = function (msg) {
  return {
    done: false,
    msg: msg
  }
}

const isUndefined = function (val) {
  return typeof val === 'undefined'
}

module.exports = {
  calcCost: function (basePrice, personNum, category = 'other') {
    // validate args
    if (isUndefined(basePrice) || isUndefined(personNum )) {
      return error('arg missing')
    }

    if (typeof basePrice !== 'number' || basePrice <= 0) {
      return error('invalid price')
    }

    if (typeof personNum !== 'number' || personNum <= 0 || !Number.isInteger(personNum)) {
      return error('invalid personNum')
    }

    if (['food', 'drugs', 'electronics', 'other'].indexOf(category) === -1) {
      return error('invalid category')
    }

    // Main calculation
    const base = basePrice + basePrice * 0.05
    let output = base

    output += base * 0.012 * personNum

    output += base * categoryMap[category]

    // round to two decimal places
    output = output.toFixed(2)

    return {
      done: true,
      result: output * 1
    }
  }
}
