//  import * from 'lodash';

  import _ from "lodash";

const solution = (str) => {
    let rez = (str.length[0]).toLowerCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] = String.fromCharCode(32)) {
            rez = rez + toUpperCase(str[i]);
        }
        else {
            rez = rez + str[i];
        }
    }
    console.log(rez);
    return rez;
}

solution('at Loader.moduleStrategy)');
//  export default addDigits; // раскоментировать в Хекслете

//функцию, которая делает заглавной первую букву каждого слова в предложении.
//solution('hello, world!'); // Hello, World!
