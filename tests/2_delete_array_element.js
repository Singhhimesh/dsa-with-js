let array = [14, 25, 36, 74, 85];

let position = -1;

const removeArrayElement = (array, position) => {
    if (position >= array.length || position < 0) {
        console.log("Can not remov array element out of stack:(");  
        
        return;
    }

    for (let index = position; index < array.length; index++) {
        array[index] = array[index + 1];
    }

    array.length--;

    console.log(array);
};

console.log(array);
removeArrayElement(array, position)