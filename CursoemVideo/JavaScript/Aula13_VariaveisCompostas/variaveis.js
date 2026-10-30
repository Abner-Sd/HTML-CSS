/* let num = [5, 3, 4, 5, 9, 8];
console.log(`Nosso vertor é ${num}`);

num[6] = 11;

console.log(`Nosso vertor é ${num}`);

num.push(55);
console.log(`Nosso vertor é ${num}`);
console.log(`O verto tem ${num.length} posições`);
num.sort()
console.log(num);

let valores = [8, 1, 7, 4, 5];

for(let pos= 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
 */

let valores = [8, 1, 7, 4, 5];

for(let pos in valores){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

let pos = valores.indexOf(8)
if(pos == -1){
    console.log("O valor não foi encontrado");
}else{

}console.log(`O valor está na posição ${pos}`)

