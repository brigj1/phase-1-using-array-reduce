const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(
    ( previousValue, currentValue ) => previousValue + currentValue,
    0 // where this is the initial amount
 );
console.log(totalBatteries);


// Other stuff from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const doubledAndSummed = [1, 2, 3].reduce(
    function(accumulator, element){
        return element * 2 + accumulator
    }, 0)
// => 12

console.log(doubledAndSummed);

let total = [ 0, 1, 2, 3 ].reduce(
    ( previousValue, currentValue ) => previousValue + currentValue,
    30 // where this is the initial amount
  )
console.log(total);


const doubledAndSummed2 = [1, 2, 3].reduce(
    function(accumulator, element){ return element * 2 + accumulator});
console.log(doubledAndSummed2)
// => 11

const doubledAndSummedFromTen = [1, 2, 3].reduce(
    function(accumulator, element){ return element * 2 + accumulator}, 10);
// => 22
console.log(doubledAndSummedFromTen)