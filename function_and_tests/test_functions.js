function sum (a , b )
{
   return a + b ;
}


function isEven (num)
{
    return num % 2 == 0; 
}

function factorial (num)
{
    if (num === 1 || num === 0 || num < 0 )
    {
        return 1; 
    }

    return num * factorial (num - 1 ) 
}

function isPalindrom (string)
{
  if (string == "")
    {
        return false; 
    }

    let clearString = string.toLowerCase(). replace (/[\W_]/g, ""); 
    

    let reverseString = clearString.split("").reverse().join("");


    return clearString == reverseString

}

//console.log (isPalindrom ("civic"));

function fibonacci (number)
{ 
    if (number === 0 )
        {
            return []; 
        }

        if (number === 1 )
        {
            return [0];
        }

 let sequense = [ 0, 1]; 

for (let i = 2; i < number; i++)
{
    sequense.push(sequense [i - 1] + sequense [i - 2])  ;
}

return sequense;
}

//console.log (fibonacci (10));

function nthPrime(number) {
    let count = 0; // Брояч на намерените прости числа
    let num = 2;   // Първото просто число е 2. Простите числа се делят САМО на себе си и на 1.

    // Докато не намерим number прости числа
    while (count < number) {
        if (isPrime(num)) {
            count++; // Ако числото е просто, увеличаваме брояча
        }
        num++; // Увеличаваме текущото число
    }

    return num - 1; // Връщаме последното намерено просто число
}

// Функция за проверка дали дадено число е просто
function isPrime(n)
 {
    if (n <= 1) return false; // Числа по-малки или равни на 1 не са прости
    if (n <= 3) return true;  // Числата 2 и 3 са прости

    // Ако числото се дели без остатък на 2 или 3, не е просто
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Проверка на делителите от n нагоре с крачка 6
    for (let i = n; i * i <= n; i += 6) 
    {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true; // Ако не се намерят делители, числото е просто
}

// Пример за използване на функцията
//console.log(nthPrime(5)); // Резултат: 11


function generatePascalsTriangle(rows) {
    // Инициализация на назъбения масив за съхранение на триъгълника на Паскал
    let triangle = [];

    // Основен цикъл за създаване на всеки ред в триъгълника
    for (let i = 0; i < rows; i++) {
        // Създаваме нов ред с дължина i + 1
        let row = [];
        row[0] = 1; // Първият елемент винаги е 1

        // Запълваме вътрешните елементи на реда
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Последният елемент винаги е 1 (ако редът има повече от един елемент)
        if (i > 0) {
            row[i] = 1;
        }

        // Добавяме текущия ред към триъгълника
        triangle.push(row);
    }

    return triangle; // Връщаме назъбения масив (триъгълника на Паскал)
}

// Пример за използване на функцията
//let rows = 5;
//let pascalsTriangle = generatePascalsTriangle(rows);
//console.log(pascalsTriangle(5));


function isPerfectSquare(num) 
{
    return Math.sqrt(num) % 1 === 0;  // Перфектния квадрат е квадрата който се дели на 1 без остатък
}

module.exports =
{
    sum,
    isEven,
    factorial,
    isPalindrom,
    fibonacci,
    nthPrime,
    generatePascalsTriangle,
    isPerfectSquare
}