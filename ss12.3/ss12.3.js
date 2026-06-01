

let numberA = 0;
let numberB = 1;

for(i=0;i<=20;i++){
    console.log(numberA);

    let sum = numberA + numberB; 
    numberA = numberB; 
    numberB = sum;    
}