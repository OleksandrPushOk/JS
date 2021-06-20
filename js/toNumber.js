
//TO NUMBER

//Будь-яке рядкове значення до числа
let value = "Bla Bla Bla";

// 1й спосіб
let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);



//Рядкове число до числа
 value = "123";

// 1й спосіб
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);



//Пустий рядок до числа
 value = "";

// 1й спосіб
toNumber = Number(value);
console.log(`Пустий рядок ${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних пустий рядок ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`Пустий рядок ${value}, через унарний +:`, toNumber);
console.log(`Тип даних пустий рядок ${value}, через унарний +:`, typeof toNumber);



//Рядок з пробілем ( не пустий) до числа
 value = " ";

// 1й спосіб
toNumber = Number(value);
console.log(`Рядок з пробілем ${value}, через конструктор Number():`, toNumber);
console.log(`Рядок з пробілем ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`Рядок з пробілем ${value}, через унарний +:`, toNumber);
console.log(`Рядок з пробілем ${value}, через унарний +:`, typeof toNumber);



//Булеве (логічне) true до числа
value = true;

// 1й спосіб
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);




//Булеве (логічне) false до рядка
value = false;

// 1й спосіб
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);



// //undefined до рядка
value = undefined;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);





// //null до рядка
value = null;

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`Тип даних ${value}, через конструктор Number():`, typeof toNumber);

// 2й спосіб
toNumber = +value;
console.log(`${value}, через унарний +:`, toNumber);
console.log(`Тип даних ${value}, через унарний +:`, typeof toNumber);
