const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  let last = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < last) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), last, ...quickSort(right)]
}
