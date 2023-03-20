/*EXO 1*/

// let num = '';

// for (let i = 1; i <= 10; i++) {
//      num = num + i;

// }

// console.log(num);


/*EXO 2*/ 

// let result = '';

// for (let i = 1; i <= 10; i++) {
//     result = result + ' ' + i;
    
// }

// console.log(result);


/*EXO 3*/

// let result = '';

// for (let i = 1; i < 100; i++) {
//     if (i%2 == 1) {
//         result = result + ' ' + i;
//     }
// }

// console.log(result);


/*EXO 4*/

// let result = '';

// for (let i = 7; i <= 70; i++) {
//     if (i%7 == 0) {
//         result = result + ' ' + i;
//     }
// }

// console.log(result);


/*EXO 5*/

// let result = '\n';
// for(let i = 1; i <= 10; i++){
    
//     for(let j = 1; j <= 10; j++){
//         result += (i*j) + " ";
//     }
//     result += '\n'
// }

// console.log(result);


/*EXO 6*/

// let result = 0;

// for (let i = 1; i <= 10; i++) {
//     result += i;
// }

// console.log(result);


/*EXO 7*/

// let result = 1;

// for (let i = 1; i <= 10; i++) {
//     result = result * i;
// }

// console.log(result);


/*EXO 8*/

// let result = 0;

// for (let i = 10; i <= 30; i++) {
//     if (i%2 == 0) {
//         result += i;
//     }
// }

// console.log(result);


/*EXO 9*/

// function convertir(celsius) {
//     let result = celsius * 9/5 + 32;
//     return result
// }

// console.log(convertir(30));


/*EXO 10*/

// function calcul(numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result
// }

// console.log(calcul([1,5,6]));


/*EXO 11*/

// function moyenne(numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     result = result / numbers.length;

//     return result
// }

// console.log(moyenne([1,5,6]));


/*EXO 12*/

// function calcule(numbers) {
//     let result = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 0) {
//             result.push(numbers[i])
//         }
//     }
//     return result
// }

// console.log(calcule([1,0,-5,8,-1,5]));


/*EXO 13*/

// function maximum(max){
//     let tab = max[0];
//     let tmp;
//     for(let i = 0; i < max.length; i++){
//          if(max[i] > tab){
//             tmp = max[i];
//          }
//     }
//     return tmp
// }
// console.log(maximum([5,9,7,8,17]))


/*EXO 14*/

// let n1 = 0;
// let n2 = 1
// let result = 0;

// for (let i = 2; i <= 10; i++) {
//    result = n1 + n2;
//    n1 = n2; 
//    n2 = result; 
//    console.log(result);
// }



/*EXO 15*/

// function calcule(num) {
//     let result = 0;
//     let str = num.toString();
//     for (let i = 0; i < str.length; i++) {
//         let tmp = parseInt(str[i],10)
//         result += tmp;
//     }
//     return result
// }

// console.log(calcule(123));


/*EXO 16*/
/*aidé par joan*/

let t = [1,2,3,4,5]
let lastItem = t[t.length - 1]
let firstItem = t[0]
t.shift()
t.pop()
t.unshift(lastItem)
t.push(firstItem)
console.log(t);