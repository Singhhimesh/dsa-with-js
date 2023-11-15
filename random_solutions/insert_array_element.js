let array = [14, 25, 36, 74, 85];
let position = 2;
let newElement = 111;

const removeArrayElement = (array, position, newElement) => {
    for (let index = array.length - 1; index > 0; index--) {
        if (index >= position) {
            array[index + 1] = array[index];

            if (position == index) {
                array[position] = newElement
            }
        }
    }

    return array;
};

console.log(array);

let newArray = removeArrayElement(array, position, newElement);
console.log(newArray);