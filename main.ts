const fib_bottom_up = (num: number): number => {
  const arr = [0, 1]

  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[num]
}

console.log(fib_bottom_up(5))

//! algorithmic complexity O(n)
