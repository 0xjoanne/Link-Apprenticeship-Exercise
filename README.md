# Link Apprenticeship Exercise

## Runtime Versions

```bash
node.js v7.7.3

npm v4.1.2
```

## Install Package

```bash
$ npm install
```
## Run tests

```bash
$ npm test
```

## Documentation

### Usage

```bash
const calculator = require('./calculator.js')
const result = caculator.calcCost(basePrice, personNum, category)
```

### Params

- basePrice: Number (greater than 0)
- personNum: Integer (greater than 0)
- category: String, "food", "drugs", "electronics", "other"

if all args are valid, return
`{done: true, result: 40}`

if invalid or missing, return
`{done: false, msg: 'arg missing'}`

## Reflection

1. Check if parameters are missing or invalid to make sure calculator works well.

2. Using **category map**, instead of "if else" statement, to calculate cost is more straightforward.

3. Define **typeof val === 'undefined'** which is called multiple times as a public function.

4. If only return false or return error message, it is not clear for caller to check error. So I decided to return **done: false** or **done: true** instead.
