//let buffer = Buffer.alloc(4);
let buffer = Buffer.from([1,2,5])
let buffer1 = Buffer.from('Hola')

console.log(buffer);
console.log(buffer1)

/*Abecedario con Buffer*/

let abc = Buffer.alloc(26);
console.log(abc)

for(let i = 0; i < 26; i++){
    abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString());

