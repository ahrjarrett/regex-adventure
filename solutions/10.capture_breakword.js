module.exports = (str) => {
  const x = /\bx=(\d+)\b/.exec(str)
  return x ? x[1] : null
}
