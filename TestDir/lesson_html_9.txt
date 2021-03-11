// var.1 - не пойму рекурсия или итерация через задницу ?
//=================================================
const smallestDivisor = (number) => {
 if (number === 1) {
    return 1;
  }
  const iter = (counter, del, x) => {
    if (counter === 1) { //проверка числа на выход, 1=до 2х
       return x;
    }
    if (number%counter===0) { //проверка 
      console.log(del+'-'+counter+'--'+(number%counter)); // вывод промежутка на экран
      x=counter;//запоминаем последнее число при котором / без остатка
    }
    return iter(counter - 1, (number%counter), x);
  };

  return iter(number, 0, 1);
};

smallestDivisor(33);

//=========================================================
// вар 2 -правильный
//=========================================================

const smallestDivisor = (number) => {
 if (number === 1) {
 // if (acc > num / 2) { // достаточно проверить до половины числа
    return 1;
  }

  const iter = (counter) => {
    if (counter === number) { //проверка что дошли до самого числа и на выход
       return number;
    }

    if (number%counter===0) { //проверка 
//        console.log(counter+'--'+(number%counter)); // вывод промежутка на экран
      return counter;
    }
    return iter(counter + 1);
  };

  return iter(2);
};

export default smallestDivisor;
