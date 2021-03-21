export const swap = (getArray) => {
  let temp = '';
  const arrLen=getArray.length-1;
  if (arrLen <2) { 
//    console.log(getArray);
    return getArray;
  }
      temp = getArray[0];
//      console.log(temp);
      getArray[0] = getArray[arrLen];
      getArray[arrLen] = temp;
//    console.log(getArray);
    return getArray;
}
swap(['1', 2]);

/*
swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
*/