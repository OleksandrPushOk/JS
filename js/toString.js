//==TO STRING==


//Число до рядка
let value = 0;

// 1й спосіб
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);




//Число до рядка
value = 1;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);



//Значення нескінченності до рядка
value = Infinity;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);



//Не число до рядка
value = NaN;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);

//=======


//Булеве (логічне) true до рядка
value = true;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);




//Булеве (логічне) false до рядка
value = false;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);




//undefined до рядка
value = undefined;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);




//null до рядка
value = null;

// 1й спосіб
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`Тип даних ${value}, через конструктор String():`, typeof toString);

// 2й спосіб
toString = value + "";
console.log(`${value}, через конкатинацію:`, toString);
console.log(`Тип даних ${value}, через конкатинацію:`, typeof toString);
