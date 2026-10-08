// Phillip Onofua | Student ID: 101489064 | COMP3123 Lab Test 1
function resolvedPromise(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({message: "delayed success!" })
        }, 500);
    })
    
}

function rejectedPromise(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    })
}

resolvedPromise().then((result) => {console.log(result)})
rejectedPromise().catch(error => {console.log(error)})