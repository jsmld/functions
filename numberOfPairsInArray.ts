const numberOfPairsInArray = (arr: any[]) => {
  let pairs = {};
  arr.forEach(el => {
    pairs[el] ||= 0
    pairs[el] += 1
  })
  //@ts-ignore
  let pairCount = Object.values(pairs).map(val => Math.floor(val/2))
  let totalNumberOfPairs = pairCount.reduce((sum, x) => sum += x)
  return totalNumberOfPairs;
}
