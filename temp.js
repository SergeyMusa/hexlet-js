/*Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).

Примеры
*/
//const numbers = [8, 9, 21, 19, 18, 22, 7];
const numbers = [2, 0, 17, 3, 9, 15, 4];
//calculateSum(coll1); // 48
/* 
const numbers = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27
//В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression):

const coll = [];
calculateSum(coll); // 0
*/
export const arrays = (numbers) => {
  let summ = 0;
  for (let i = 0; i < (numbers.length-1); i += 1) {

    if (numbers[i] % 3 === 0) {
      summ += numbers[i];
      console.log(i+', '+summ);
    }
  }
  console.log(summ);
  return summ;
}
export default arrays;

arrays(numbers);

/*
const names = ['john', 'smith', 'karl','serg','brus'];
 
//reverse(names);
//console.log(names); // => ['karl', 'smith', 'john']

export const arrays = (names) => {

  for (let i = 0; i < (names.length-1)/2; i += 1) {
    let nameA=names[i];
    let nameB=names[names.length-1-i];
    
    console.log(i);

    names[i]=nameB;
    names[names.length-1-i]=nameA;

    console.log(`${nameA}, ${nameB}`);
  }
  console.log(names);
}

arrays(names);

//console.log(names); // => ['john', 'smith', 'karl']
*/

//-------------------------------------------------------//
/*
export const arrays = (userNames, getPrefix) => {
  const newNames = [];

//import addPrefix from './arrays.js';
  for (let i = 0; i < userNames.length; i += 1) {
    newNames[i] = (`${getPrefix} ${userNames[i]}`);
//    console.log(newNames[i]);
  }
//   console.log('all: '+newNames);
 return newNames;
}

arrays(['john', 'smith', 'karl'], 'Mr'); 
// => ['Mr john', 'Mr smith', 'Mr karl'];
*/
//-------------------------------------------------------//
/*
export const arrays = (getArray, getIndex, getDefault=null) => {
  let returnValue = '';
  const arrLen=getArray.length;
  if (getIndex > -1 && getIndex < arrLen) {
    returnValue = getArray[getIndex];
   console.log(returnValue);
    return returnValue;
  }
   console.log(getDefault);
    return getDefault;
}
*/
//arrays(['moscow', 'london', 'berlin', 'porto', '1'], 5); 

//get(cities, 1); // 'london'
//get(cities, 4); // null
//get(cities, 10, 'paris'); // 'paris'
//get(cities, -1, 'oops'); // 'oops'


//const cities = ['moscow', 'london', 'berlin', 'porto'];


/*
get(cities, 1); // 'london'
get(cities, 4); // null
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'
Подсказки
Для параметров функции можно указывать значения по умолчанию прям при объявлении: 
(param = 'default value')

arrays(['1', 2]);

swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
*/