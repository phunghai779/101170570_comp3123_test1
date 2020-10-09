const resolvedPromise = new Promise(function(resolve, reject){
    setTimeout(() =>resolve(console.log('message: delayed succes!')),500);
});


const rejectedPromise = new Promise(function(resolve, reject){
    setTimeout(() => reject(console.log(new Error("delayed exception"))), 500);
});
console.log(resolvedPromise);
console.log(rejectedPromise);
