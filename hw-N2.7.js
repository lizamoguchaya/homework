// 1. Преобразуйте строку js в верхний регистр JS. // 

const string = 'строка'; 

console.log(string.toUpperCase());

// 2. Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять. //

const animals = ['кошка', 'кит', 'комар', 'носорог'];
const search = 'ко';

animals.forEach((animals) => {
    if (animals.toLowerCase().includes(search.toLowerCase())){
        console.log(animals);
    }

});

// 3. Округлите число 32.58884 // 
// меньшее целое :// 
const number = 32.58884;
function getMinInt(){
    return Math.floor(number)
}
console.log(getMinInt());
//большее целое ://
function getMaxInt(){
    return Math.ceil(number)
}
console.log(getMaxInt());

//ближайшее целое://
function getRandomInt(){
    return Math.round(number)
}
console.log(getRandomInt());

// 4. Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.//


function minmax(...numbers) {
    return [Math.max(...numbers), Math.min(...numbers)];
}
console.log(minmax(52, 53, 49, 77, 21, 32));

// 5. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10. // 

function RandomInt(minValue, maxValue){
    return Math.round(Math.random() * (maxValue - minValue));
}

console.log(RandomInt(1, 10));

// 6. Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа. //

