let array = [14, 25, 25,78, 58];
let findElement = 25;
let foundAtindex = [];

for (let index = 0; index < array.length; index++) {
    if (findElement === array[index]) {
        foundAtindex.push(index);
    }
}

console.log(foundAtindex);