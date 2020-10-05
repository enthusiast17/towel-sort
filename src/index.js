
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []
  return matrix.reduce((res, element, index) => index % 2 === 0 ? res.push(...element.sort((a, b) => a - b)) && res : res.push(...element.sort((a, b) => b - a)) && res, [])
}
