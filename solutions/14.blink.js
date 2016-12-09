// remember `npm i marked` before running this one
const marked = require('marked')

module.exports = (str) => {
  const markdown = marked(str)
  // alternative solution: /@@(.+?)@@/g
  const regex = /@@([^@@]*)@@/g
  return markdown.replace(regex, '<blink>$1</blink>')
}
