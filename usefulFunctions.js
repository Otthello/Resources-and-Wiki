var roundToNearestCent = function(num){
  return Math.round( num * 100 + Number.EPSILON ) / 100
}
