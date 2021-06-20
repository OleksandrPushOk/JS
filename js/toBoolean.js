//TO NUMBER

//Будь-яке рядкове значення до БУЛЮ
let value = "Bla Bla Bla";

// 1й спосіб
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//Будь-яке рядкове число до БУЛЮ
value = "123";

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);




//Пустий рядок до БУЛЮ
value = "";

// 1й спосіб
toBoolean = Boolean(value);
console.log(`пустий рядок ${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних пустий рядок ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`пустий рядок ${value}, через !!:`, toBoolean);
console.log(`Тип даних пустий рядок  ${value}, через унарний +:`, typeof toBoolean);




//Рядок з пробілом до БУЛЮ
value = " ";

// 1й спосіб
toBoolean = Boolean(value);
console.log(`рядок з пробілом ${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних рядок з пробілом  ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`рядок з пробілом ${value}, через !!:`, toBoolean);
console.log(`Тип даних рядок з пробілом  ${value}, через унарний +:`, typeof toBoolean);




//Число до БУЛЮ
value = 0;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//NaN до БУЛЮ
value = NaN;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//Infinity до БУЛЮ
value = Infinity;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//Число до БУЛЮ
value = 1;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//undefined до БУЛЮ
value = undefined;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);



//null до БУЛЮ
value = null;

// 1й спосіб
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(`Тип даних ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2й спосіб
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean);
console.log(`Тип даних ${value}, через унарний +:`, typeof toBoolean);
