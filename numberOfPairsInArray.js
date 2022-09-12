const numberOfPairsInArray = (arr) => {
  let pairs = {};
  arr.forEach(el => {
    pairs[el] ||= 0
    pairs[el] += 1
  })
  let pairCount = Object.values(pairs).map(x => Math.floor(x/2))
  let totalNumberOfPairs = pairCount.reduce((sum, x) => sum += x)
  return totalNumberOfPairs;
}