
const getRandomSelectionOfBlocks = (fieldSize, sequenceNumber) => {
  /**
   * Implements partial Fisher–Yates shuffle
   * 
   * args:
   *  - fieldSize: size of blocks in a row
   *  - sequenceNumber: number of blocks needed for selection
   * returns:
   *  - array indices of randomly selected blocks
   */
  const arr = [...Array(fieldSize * fieldSize).keys()];

  let result = new Array(sequenceNumber),
    len = arr.length,
    taken = new Array(len);
  if (sequenceNumber > len)
    return arr;
  while (sequenceNumber--) {
    let x = Math.floor(Math.random() * len);
    result[sequenceNumber] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export {
  getRandomSelectionOfBlocks,
};
