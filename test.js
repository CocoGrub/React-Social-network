
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const arr3 =[...arr1,...arr2]
// console.log(arr3);

const obj1={a:1,b:2,c:3}
const obj2={c:3,d:4}
const obj3={...obj1,...obj2}
// console.log(obj3);


const arr4=[...arr3,obj3]
console.log(arr4);
obj4={...arr3}
console.log(obj4);
