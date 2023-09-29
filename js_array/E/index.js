function findCountOfObj(obj){
    return Object.keys(obj).length;
}

let user ={
    name:"Isa",
    Age:18
}
console.log(findCountOfObj(user));