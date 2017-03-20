'use strict'

const categoryMap = {
  food: 0.13,
  drugs: 0.075,
  electronics: 0.02,
  other: 0
}

module.exports = {
  calcCost: function (basePrice, personNum, category = 'other') {

    // Main calculation
    const base = basePrice + basePrice * 0.05
    let output = base

    output += base * 0.012 * personNum

    output += base * categoryMap[category]

    // round to two decimal places
    output = output.toFixed(2)

    return output * 1
  }
}
