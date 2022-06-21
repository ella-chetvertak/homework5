let testArr = [...Array(10)];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
const myArr = testArr.map(el => {
    return Math.floor(getRandomArbitrary(10, 21));
});
console.log(myArr)
const divArr = myArr.filter(el => el % 3 === 0);
console.log(`There are the elements that divide by three: ${divArr}`);
const findArr = [myArr.find(el => el > 7)]; 
if (findArr === undefined) {
    console.log('All elements < 7');
} else console.log(`This is the first element that is more than seven: ${findArr}`);
const multArr = myArr.map(el => el * 2);
console.log(`Theese numbers are two times more than random: ${multArr}`);
const sumEven = myArr.reduce((previousValue, currentValue) => 
    (currentValue % 2) == 0 ? currentValue + previousValue : previousValue
);
console.log(`The sum of the even elements is ${sumEven}`);
const delBeginArr = myArr.slice(1)
console.log(`This is the array, but first element is deleted: ${delBeginArr}`)
const delEndArr = myArr.slice(0, -1)
console.log(`This is the array, but last element is deleted: ${delEndArr}`)
const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
let sameArr = [];
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayTwo.includes(arrayOne[i])) sameArr.push(arrayOne[i]);
};
console.log(`arrayOne and arrayTwo have some same elements ${sameArr}`);