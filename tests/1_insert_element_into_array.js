let array = [14, 25, 36];

let position = 1;

let newElement = 45;

console.log(array);

for (let i = array.length - 1; i > position;i--) {
    if (i >= position) {
        array[i + 1] = array[i];

        if (position == i) {
            array[position] = newElement;
        }
    }
}

console.log(array);