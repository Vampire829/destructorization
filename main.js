//Диструктаризация Объектов
const person={
    name: 'Alim',
    ferstName: 'Mudarov',
}

function say({name, ferstName}){
 return name+ ': ' + ferstName
}
console.log(say(person))

//Диструктаризация Массива
const numbers = [1, 2, 3, 4, 5];

const [a,b,c] = numbers;
console.log(a,b)



