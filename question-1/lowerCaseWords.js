// Phillip Onofua | Student ID: 101489064 | COMP3123 Lab Test 1

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
            const filteredArray = array.filter(item => typeof item === "string").map(word => word.toLowerCase());

            resolve(filteredArray)
    })
}
lowerCaseWords(mixedArray).then((result) =>{console.log(result)}).catch(error => console.log(error.message));
lowerCaseWords("pizza").then((result) =>{console.log(result)}).catch(error => console.log(error.message));