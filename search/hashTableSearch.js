function hashTableSearch(arr, target) {
  let hashTable = {}

  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = i
  }

  if (hashTable[target] !== undefined) {
    return hashTable[target]
  }

  return -1
}
