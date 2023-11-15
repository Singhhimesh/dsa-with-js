let array = [14, 25, 36, 47, 45, 74, 85];

let position = 2;

const removeArrayElement = (array, position) => {
    for (let index = position; index < array.length; index++) {
        array[index] = array[index + 1];
    }

    array.length--;

    return array;
};

console.log(array);

console.log(removeArrayElement(array, position));