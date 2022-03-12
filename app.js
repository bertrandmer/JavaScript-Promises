console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let watching = newPromise((resolve,reject)) =>{
    let userWatchingLiveStream;
    if (userWatchingLiveStream == true){
        resolve("Thumbs Up and Subscribe!")
    }else{
        reject("User left.")
    }
})
watching.then((message)) =>{
    console.log(message)
    }).catch((error)) =>{
        console.log(error)
    })