//1. Дан массив: [1, 5, 4, 10, 0, 3] Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.//

let numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= [3]; i += 1) 
console.log(numbers[i]);

// 2. Дан массив: [1, 5, 4, 10, 0, 3].Найдите позицию (индекс) числа 4 в этом массиве.Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf. //

let num = [1, 5, 4, 10, 0, 3];
let index = num.indexOf(4);
console.log(index);

// 3. Дан массив чисел: [1, 3, 5, 10, 20].С помощью метода join выведите элементы массива через пробел (пустую строку ' '). // 

let massive = [1, 3, 5, 10, 20];
massive = massive.join (' ');
console.log(massive);

// 4. С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].// 

let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]; 
for (let arrIn of arr) {
    for( let element of arrIn) {
        console.log(element);
    }
};

// 5. Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.// 

let nums = [1, 1, 1]; 
nums = nums.concat ([2, 2, 2]);
 console.log(nums); 

 // 6. Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.//

let unsortMassive = [9, 8, 7, 'a', 6, 5];
unsortMassive = unsortMassive.sort (function(a, b) {
    return a - b
}); 
console.log(unsortMassive.pop());
console.log(unsortMassive);

// 7. Дан массив: [9, 8, 7, 6, 5].Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».//

let correctNumbers = [9, 8, 7, 6, 5]; 
let userAnswer = prompt('Введите число');
  if (correctNumbers.includes(Number(userAnswer)) === true) {
    alert('Угадал')
  } else {
    alert('Не угадал')
  };


 
  
// 8. Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
letters = letters.reverse();
letters = letters.join('');
console.log(letters);

// 9. Дан массив: [[1, 2, 3,],[4, 5, 6]].Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

let firstMassive = [
    [1, 2, 3],
    [4, 5, 6]
]
let result = [].concat(...firstMassive);
console.log(result);

// 10. Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива. Следующий элемент массива можно получить с помощью индекса:  i + 1. Обратите внимание, что у последнего элемента нет следующего. // 

let array = [2, 4, 5, 7, 9, 3];
for ( let i = 0; i <= array.length - 1; i++ ) {
    let sum = 0;
    if (i === array.length - 1) {
        sum = array[array.length - 1];
        break;
    } else {
        sum = array[i] + array[i + 1];
    }
console.log(sum);
}

// 11. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. //

let square = (startNumber) => {
    let result = startNumber.map(item => (item ** 2));
    return result;
}
console.log(square([1, 2, 3, 4, 5]));

// 12. Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов. //

const getLength = (source) => {
    let result = source.map(word => word.length); 
    return result;
}
console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));

// 13. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения. // 

function filterPositive (array2) {
 let result = array2.filter(item => (item < 0));
 return result;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
//