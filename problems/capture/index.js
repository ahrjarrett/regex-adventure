var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(4)
  var f = require(path.resolve(args[0]))
  t.equal(f('x=5'), '5', 'x=5')
  t.equal(f('abc x=5'), '5', 'x=5')
  t.equal(f('x=abc'), null, 'x=abc')
  t.equal(f('beep x=123123 boop'), '123123', 'beep x=123123 boop')
})
