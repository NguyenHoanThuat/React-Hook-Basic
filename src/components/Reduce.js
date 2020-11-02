const sumFor = (numberList) => {
  let sum = 0;

  for (number of numberList) {
    const newSum = sum + number;
    sum = newSum;
  }

  return sum;
};

console.log(sumFor([1, 2, 3, 4, 5, 6, 7]));

const sumFor = (numberList) => {
  return numberList.reduce((sum, number) => sum + number, 0);
};

console.log(sumFor([1, 2, 3]));

const findTheLongesWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return null;

  return wordList.reduce((theLongWord, word) => {
    return theLongWord.length > word.length ? theLongWord : word;
  }, wordList[0]);
};

console.log(findTheLongesWord(["love", "easy", "frontEnd"]));

////////////////////////

const longName = (nameList) => {
  let objectName = [...nameList].reduce((theLongName, name) => {
    theLongName[name] = theLongName[name] + 1 || 1;
    return theLongName;
  }, {});

  return Object.keys(objectName).reduce((a, b) => {
    return objectName[a] > objectName[b] ? a : b;
  });
};

console.log(longName("nguyen hoanooo thuat"));

///////////////////////////

function countOccurrences(arr) {
  return arr.reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}

console.log(countOccurrences(["a", "b", "c", "b", "a"]));

//////////////

const arrayToObject = (itemList) => {
  return itemList.reduce((object, result) => {
    object[result.id] = result.valuee;
    return object;
  }, {});
};

const itemList = [
  { id: "key1", valuee: "supper Man" },
  { id: "key2", valuee: "Wonder Man" },
  { id: "key3", valuee: "spider Man" },
];

console.log(arrayToObject(itemList));
