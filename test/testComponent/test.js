'use strict'
var obj = {
  'name': 'A',
  'age': '23'
}
var newObj = {
  'name': 'A',
  'age': '23',
  'birth': '1999年-08月'
}
obj = {...(obj), ...(newObj)
}
console.log(...('a', 'v'))
