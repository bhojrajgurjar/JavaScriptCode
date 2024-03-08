//Recursive Function

// function factorial(n) {
//     if(n<=1){
//         return 1;
//     }

//     console.log(n+"*")
//     return n*factorial(n-1);

// }
// console.log(typeof factorial)
//console.log(factorial(8));


//High-order function

// function multiplier(factor){
//     return function(x){
//         return x*factor;
//     };
// }
// const double = multiplier(2);
// const result = double(5);
// console.log(result);


//Callback function

// function fetchData(callback){
//     const data = "12334";
//     callback(data);
// }

// function handleData(d){
//     console.log("data recieved: "+d)
// }

// fetchData(handleData);


//Generator function

function * generateSequence(){
    console.log("zero");
    yield console.log("first");
    yield console.log("second");
    yield console.log("third");
    yield console.log("forth");
}

const generator = generateSequence();
generator.next();
generator.next();
generator.next();

//generateSequence().next();