const randomFunction = (word,times = 1) => {

    return word * times;
} 

console.log(randomFunction("Hello"));
console.log(randomFunction("Hello",5));