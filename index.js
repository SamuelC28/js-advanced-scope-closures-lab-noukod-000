function produceDrivingRange (blockRange) {
  return function(blockOne, blockTwo) {
    let difference = parseInt(blockOne) - parseInt(blockTwo);
    absoluteDifference = Math.abs(difference);
   if (absoluteDifference <= blockRange) {
      return `within range by ${absDifference}`
    } else {
      return `${absoluteDifference - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator (tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}
