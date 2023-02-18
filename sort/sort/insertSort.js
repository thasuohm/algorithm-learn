const arr = [4, 2, 3, 1]
// 2 3 4 1

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      j--
    }
  }
  return arr
}
