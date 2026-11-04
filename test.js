// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//   console.log(`Element ${number} is at index ${index} in array ${array}`);
// });



// function operateOnArray(arr, operation) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(operation(arr[i]));
// }
//   return result;
// }

// function double(x) {
//     return x * 2;
// }

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = operateOnArray(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// const numbers = [3, 4, 5, 6, 7].map((element) => {
//   console.log("Element:", element);
//   return element * 2;
// });


// const numbers = [3, 4, 5, 6, 7].map((element, index) => {
//   console.log("Element:", element);
//   console.log("Index:", index);
//   return element * 2;
// });


const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});