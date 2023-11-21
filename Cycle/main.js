
//1 подсчет суммы чисел N
let N = 5;
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum+= i;
}
console.log(sum)

//2  Вывод четных чисел до N
let M = 10;

for (let i = 2; i <= 10; i+=2) {
    console.log(i)
}

//3  Поиск наибольшего элемента в массиве
let numbers = [4, 9, 2, 8, 5];
let maxNumbers = [0]

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] > maxNumbers){
       maxNumbers = numbers[i];
    }
}
console.log(maxNumbers)

//4 Подсчет количества гласных букв в строке
let str = "Hello, World!";

function test (str) {
    let vowelsStr = 0;
    str = str.toLocaleLowerCase();
    for (let i = 0; i < str.length; i++) {
        let v = str [i];
        if (v === "e" || v === "o" ) {
            vowelsStr++
        }
    }
    return console.log(vowelsStr);
}
test(str);

//5 Поиск первого положительного элемента в массиве
let numbers2 = [-2, 0, 3, -5, 7, -8];
let positiveNum;

    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] > 0) {
            positiveNum = numbers2[i]
            break
        }
    }
    console.log(positiveNum)

// 6 Подсчет общей стоимости продуктов в корзине
let cart = [ { name: 'Молоко', price: 2.5, quantity: 2 }, 
{ name: 'Хлеб', price: 1.5, quantity: 3 }, 
{ name: 'Яблоки', price: 1, quantity: 5 } ];

function sumCart (cart) {
    let summ = 0;
    for (let i = 0; i < cart.length; i++) {
        summ += cart[i].price * cart[i].quantity;
    } 
    return summ;
}
console.log(sumCart(cart))

//7 Поиск объекта по ключу
let users = [ { id: 1, name: 'Alice' }, 
{ id: 2, name: 'Bob' }, 
{ id: 3, name: 'Charlie' } ];
let userIdToFind = 2;

function funUserIdToFind (users) {
    
    let searchById;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userIdToFind){
            searchById = users[i]; break
        }
    }
    console.log(searchById)
}

//8 Фильтрация объектов по условию
let students = [ { name: 'Alice', score: 85 }, 
{ name: 'Bob', score: 92 }, 
{ name: 'Charlie', score: 78 }, 
{ name: 'David', score: 95 } ];

let filterOfStudents = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].score > 90) {
        filterOfStudents.push(students[i])
    }
}
console.log(filterOfStudents)

//9: Группировка объектов по определенному критерию
let people = [ { name: 'Alice', age: 25 }, 
{ name: 'Bob', age: 30 }, 
{ name: 'Charlie', age: 25 }, 
{ name: 'David', age: 30 } ];

let peopleFilterByAge = {};

for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (peopleFilterByAge[person.age]) {
        peopleFilterByAge[person.age].push(person);
    
    } else {
        peopleFilterByAge[person.age] = [person];
    }
}

console.log(peopleFilterByAge);

// 10 Подсчет количества элементов по категориям
let items = [
    { name: 'Книга', category: 'Литература' },
    { name: 'Телефон', category: 'Электроника' },
    { name: 'Шампунь', category: 'Красота' },
    { name: 'Футболка', category: 'Одежда' },
    { name: 'Ноутбук', category: 'Электроника' }
  ];
  
let categoryProduct = {};

for (let i = 0; i < items.length; i++) {
    let item = items[i]; 

    if (categoryProduct[item.category]) {
        categoryProduct[item.category]++
    } else {
        categoryProduct[item.category] = 1;
    }
}
console.log(categoryProduct);



