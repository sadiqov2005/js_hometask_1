function calculateSalaries(salries){
let total=0;
for(let person in salries){
total+=salries[person];

}
return total;

}
let salries1={John: 100, Ann: 160, Pete: 130};
console.log(calculateSalaries(salries1));