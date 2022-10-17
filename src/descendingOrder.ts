// Takes a number and rearranges it in descending order

export function descendingOrder(n: number): number {
  return Number(n.toString().split('').sort().reverse().join(''))
}
