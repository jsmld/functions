// Takes an array of numbers and returns the number of pairs in the array.

export const numberOfPairsInArray = (arr: number[]): number => {
	const pairs: Record<number, number> = {};
	arr.forEach(el => {
		pairs[el] ||= 0;
		pairs[el] += 1;
	});
	const pairCount = Object.values(pairs).map(val => Math.floor(val / 2));
	const totalNumberOfPairs = pairCount.reduce((sum, x) => sum += x);
	return totalNumberOfPairs;
};
