
const getNumberOfBlocksInLine = (level) => {
  let numberOfRepeatedCategory = 1;
  let numberOfRepeatedSize = 2;

  let lastLevelInCategory = numberOfRepeatedCategory * numberOfRepeatedSize;
  while (lastLevelInCategory < level) {
    numberOfRepeatedSize += numberOfRepeatedCategory;
    numberOfRepeatedCategory += 1;
    lastLevelInCategory += numberOfRepeatedCategory * numberOfRepeatedSize;
  }
  const firstLevelInCategory = lastLevelInCategory - (numberOfRepeatedCategory * numberOfRepeatedSize) + 1;

  let numberOfBlocks = numberOfRepeatedSize;
  for (let i = 1; i <= numberOfRepeatedCategory; i++) {
    numberOfBlocks += 1;
    if (level < (firstLevelInCategory + i * numberOfRepeatedSize)) {
      break;
    }
  }

  return numberOfBlocks;
};

const getSequenceNumber = (level) => {
  return level + 2;
};

export {
  getNumberOfBlocksInLine,
  getSequenceNumber,
};
