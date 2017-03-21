import test from 'ava'
import { calcCost } from './calculator'

test("check arg", t => {
  const { done, msg } = calcCost()
  t.is(done, false)
  t.is(msg, 'arg missing')
})

test("check if basePrice is valid", t => {
  const { done, msg } = calcCost(0, 1, 'food')
  t.is(done, false)
  t.is(msg, 'invalid price')
})

test("check if personNum is valid", t => {
  const { done, msg } = calcCost(1, 0, 'food')
  t.is(done, false)
  t.is(msg, 'invalid personNum')
})

test("check if category is valid", t => {
  const { done, msg } = calcCost(1, 1, 'unexist')
  t.is(done, false)
  t.is(msg, 'invalid category')
})

test("should return correct result: case 1", t => {
  const { done, msg, result } = calcCost(1299.99, 3, 'food')
  t.is(done, true)
  t.is(result, 1591.58)
})

test("should return correct result: case 2", t => {
  const { done, msg, result } = calcCost(5432, 1, 'drugs')
  t.is(done, true)
  t.is(result, 6199.81)
})

test("should return correct result: case 3", t => {
  const { done, msg, result } = calcCost(12456.95, 4)
  t.is(done, true)
  t.is(result, 13707.63)
})
