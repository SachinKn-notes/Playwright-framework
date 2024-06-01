// Callbacks
let values = ['value-1', 'value-2', 'value-3'];

function myForEach(arr, callBack) {
    for (let i=0; i<arr.length; i++) {
        callBack(arr[i]);
    }
}

myForEach(values, (name) => {
    console.log(name);
})


// Promises
let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (!true)
            resolve("Successful!");
        else
            reject("Failed.");
    }, 3000);

})


// async & await
myPromise
    .then(result => console.log(result))
    .catch(err => console.log(err))

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function handlePromise() {
//     try {
//         console.log(await myPromise);
//     } catch(err) {
//         console.log(err);
//     }
// };

// handlePromise();


