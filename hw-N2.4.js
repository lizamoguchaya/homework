// 1. Выведите в консоль 2 раза слово «Привет». //

let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}
    
// 2. Выведите в консоль цифры от 1 до 5. // 

let number = 1;
do { 
    console.log(number);
    number++;
} while (number <= 5);

// 3. Выведите в консоль числа от 7 до 22. // 

let Number = 7;
do { 
    console.log(Number);
    Number++;
} while (Number <= 22);

// 4. Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.' //

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}; 
for (let key in obj) { 
        console.log(`${key} -зарплата ${obj[key]} долларов`)
    };


// 5. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num. //

let n = 1000; 
let num = 0;
while(n >= 50) {
    n/=2;
    num++;
    console.log(n);
}
console.log(`Число интераций ${num}`);

//6. //

for (let friday = 5; friday <= 31; friday +=7 ) {
    console.log(`Сегодня пятница ${friday}-е число. Необходимо подготовить отчет`);
} 



    
