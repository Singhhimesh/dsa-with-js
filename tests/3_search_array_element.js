let array = [14, 78, 96,78, 58];

const searchArrayElement = (array, findElement) => {
    let foundAtIndeces = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] == findElement) {
            foundAtIndeces.push(index);        
        }
    }

    return foundAtIndeces;
};

console.log(searchArrayElement(array, 585));;