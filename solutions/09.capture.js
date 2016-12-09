module.exports = (str) => {
  const x = /x=(\d+)/.exec(str)
  return x ? x[1] : null
}
