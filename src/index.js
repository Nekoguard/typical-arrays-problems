
exports.min = function min (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    let minResult = Math.min.apply(null, array);
    return minResult;
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    let maxResult = Math.max.apply(null, array);
    return maxResult;
  }
}

exports.avg = function avg (array) {
  let avgResult;
  let sum = 0;
  
  if (!array || array.length == 0) {
    return 0;
  } else {
    for (let elem of array) {
      sum += elem;
      avgResult = sum / array.length;
    }
    return avgResult;
  }
}
