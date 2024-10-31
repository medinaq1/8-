// filter;

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0 );
console.log(evenNumbers); // [2, 4, 6, ]




// const новыйМассвы = старыйМассив.map(callback(элемент,индех, массив));

// callback ар бир элементке колдонулуучу функция 


const  числа =[1, 2, 3, 4, 5];
const  умноженныеЧисла=числа.map( число => число * 2);

console.log(умноженныеЧисла); //[2, 4, 6, ]



// пример изменения объектов в массиве
//  более сложный пример 

const студенты =[
    {имя: " сумая",возраст: 15 },
    {имя: "Борис", возраст: 25 },
    {имя:" Никита",возраст:19}
];
const новыеСтуденты = студенты.map(студент => {
    return {
        ...студент,
        курс: студент.возраст >= 19 ? "второй курс" : " первый курс"
    };
});

console.log(новыеСтуденты);


const сандар =[1, 2, 3, 4, 5, ];
const всеПоложительные = числa.every ( число => число > 0);
console.log(всеПоложительные); //true






// push , pop, shift , unsift, concat, slice, splice, filter, map, redus,filnd,sort
// let arr =[1, 2, 3, 4]

// console.log(arr);

// arr.push (5)

// console.log(arr);


// const { nane} rfr dfrew







 // 1 - Задание фильтрзация 
 

//  let numbers = [ 2, 5, 8, 11, 14, 17, 20];
// let filteredNumders = numbers.filter(num => num > 10);
// console.log(filteredNumders);

// // 1.2

// let numbers1 = [ 2, 5, 8, 11, 14, 17, 20];
// let divisiblebyfile = numbers1.find(num => num % 5 === 0 );
// console.log(divisiblebyfile);


// // 2- Задание трансформация данных

// let fruits = [ "apple", "banana", "orange", "kiwi"];
// let fruits3 = fruits.map(fruit => fruit.charAt (0). toUpperCase() + fruit.slice(1));
// console.log(fruits3);

// //2.2

// let fruitObjects = fruits.map(fruit => ({fruit: fruit}) )
// console.log(fruitObjects);

// // 3- Задание агрегация данных

// let numbers5 = [1, 2, 3, 4, 5,];
// let sum = numbers5.reduce ((acc, num ) => acc + num, 0);
// console.log(sum);

// // 3.2

// let product = numbers5.reduce((acc, num ) => acc * num, 1);
// console.log(product);



