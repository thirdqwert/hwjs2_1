age = +prompt('Введите свой Возраст')

if (1 <= age && age <= 18) {
    alert('Вам нужно учиться')
}else if (18 < age && age <= 50) {
    alert('Вам нужно работать')
}else if ( 50 < age && age <= 59) {
    alert('Вам скоро на пенсию')
}else if (59 < age && age <= 100) {
    alert('Вы на пенсии')
}
else if ( 100 < age ) {
    alert('Что то не так')
}
else {
    alert('error')
}

timeInput = +prompt('Введите число')
timeInput = Number(timeInput)
switch (true) {
    case (6 <= timeInput && timeInput <= 11):
        alert('Сейчас ' + timeInput + ' часов утра');
        break;
    case (12 <= timeInput && timeInput <= 17):
        alert('Сейчас ' + timeInput + ' часов дня');
        break;
    case (18 <= timeInput && timeInput <= 23):
        alert('Сейчас ' + timeInput + ' часов вечера');
        break;
    case (5 <= timeInput && timeInput <= 24):
        alert('Сейчас ' + timeInput + ' часа ночи');
        break;
    default:
        alert('Error');
        break;
}


num1 = +prompt('Введите число')
num2 = +prompt('Введите число')
num3 = +prompt('Введите число')

if (num2 < num1 && num1 < num3 || num3 < num1 && num1 < num2 ) {
    alert('Среднее число равно ' + num1)
}else if (num1 < num2 && num2 < num3 || num3 < num2 && num2 < num1 ) {
    alert('Среднее число равно ' + num2)
}else if (num1 < num3 && num3 < num2 || num2 < num3 && num3 < num1 ) {
    alert('Среднее число равно ' + num3)
}else if (num2 == num1 || num2 == num3 || num1 == num3 || num1 == num2 == num3 ) {
    alert('Числа возможно равны') 
}
else {
    alert('error')
}