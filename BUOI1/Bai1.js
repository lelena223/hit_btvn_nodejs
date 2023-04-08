let arrA = [ 1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let newArrA = [... new Set(arrA)];

// newArrA.sort();

// for(let i=newArrA.length; i>=0 ; i--){
//     console.log(newArrA[i]);
// }

newArrA.sort((a,b) => b-a);

console.log(newArrA);

