
// 1. Linear Search:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let key = 15;
let index = -1;
let flag = false;
let count = 0;

for (let i = 0; i < array.length; i++) {
    count++;
    // If element is in the array
    if (array[i] === key) {
        flag = true;
        index = i;
        break;
    }
}

if (flag === true) {
    console.log(`Count: ${count}, Index: ${index}`);
} else {
    console.log(`Count: ${count}, Index: -1`);
}


// 2. Binary(2) Search:


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let lb = 0;
let ub = arr.length;
let mid = 0;
let key1 = 15;
let index1 = -1;
let flag1 = false;
let count1 = 0;

while (lb < ub) {
    count1++;
    mid = (lb + ub) / 2;
    mid = parseInt(mid);

    if (arr1[mid] === key) {
        flag1 = true;
        index1 = mid;
        break;
    } else if (arr[mid] < key) {
        lb = mid + 1;
    } else {
        ub = mid - 1;
    }
}

if (flag === true) {
    console.log(`Count: ${count1} Found, Index: ${index1}`);
} else {
    console.log(`Count: ${count1} Not Found, Index: ${index1}`);
}




//Question 1: Map Basics

//question 1
let country = new Map();
country.set('India', 'New Dehli');
country.set('France', 'Paris');
country.set('iran', 'Tehran');
country.set('Japan', 'Tokyo');
country.set('Austrialia', 'Canberra');

console.log('Countries and Capitals:');
for (const [countries, capital] of country) {
    console.log(`Country: ${countries}, Capital: ${capital}`);
}

//question 2: set non-repeate number 

let Deduplication = [1, 2, 4, 1, 6, 8, 2, 5, 9, 2, 0, 9, 7, 6, 3, 4, 6, 7, 8, 4, 2, 1, 5, 8, 9, 0, 2, 4, 5, 3, 2, 6, 8, 9, 6];

let numbers1 = new Set(Deduplication);
console.log(numbers1);

//Question 3: Map Operations

let myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('country', 'USA');

console.log('Name:', myMap.get('name'));
console.log('Age:', myMap.get('age'));
console.log('Country:', myMap.get('country'));


// // 2 Print the keys and values in the Map.
let arr = [
    [1, 'rohit'],
    [2, 'nayan'],
];
let myMap1 = new Map(arr);
console.log(myMap1);


// 3 Check if a specific key exists in the Map.


let name = new Map([['rohit', 'gajbhiye'], ['nayan', 'mahajan']]);

console.log(name.has('pooja'));

// 4Remove one key-value pair from the Map

let player = new Map([['rohit', 'gajbhiye'], ['vaibhav', 'wagade']]);

player.delete('vaibhav');

console.log(player);



//Question 4
//Find the union of the two sets.
//Find the intersection of the two sets.
//Find the elements that are only in the even numbers set.
//Find the elements that are only in the odd numbers set.

// Create a Set for even numbers
const evenNumbers = new Set();
for (let i = 2; i <= 10; i += 2) {
    evenNumbers.add(i);
}

// Create a Set for odd numbers
const oddNumbers = new Set();
for (let i = 1; i <= 10; i += 2) {
    oddNumbers.add(i);
}

// Find the union of the two sets
const unionSet = new Set([...evenNumbers, ...oddNumbers]);
console.log('Union of even and odd numbers:', unionSet);

// Find the intersection of the two sets
const interSectionSet = new Set([...evenNumbers].filter(x => oddNumbers.has(x)));
console.log('Intersection of even and odd numbers:', interSectionSet);

// Find the elements that are only in the even numbers set
const evenOnlySet = new Set([...evenNumbers].filter(x => !oddNumbers.has(x)));
console.log('Elements only in even numbers:', evenOnlySet);

// Find the elements that are only in the odd numbers set
const oddOnlySet = new Set([...oddNumbers].filter(x => !evenNumbers.has(x)));
console.log('Elements only in odd numbers:', oddOnlySet);


//Question 5:
// Create a new Map to store fruits and their colors
let fruitColorMap = new Map();

fruitColorMap.set('apple', 'red');
fruitColorMap.set('pineApple', 'yellow');
fruitColorMap.set('grape', 'green');
fruitColorMap.set('orange', 'orange');
fruitColorMap.set('lichi', 'white');

console.log('Fruit Names and Colors:');
for (let [fruit, color] of fruitColorMap) {
    console.log(`Fruit: ${fruit}, Color: ${color}`);
}

//Question 6

// Create a Set of integers
let integerSet = new Set();

integerSet.add(1);
integerSet.add(2);
integerSet.add(3);
integerSet.add(4);
console.log('Size of the Set:', integerSet.size);

// // Clear the Set
integerSet.clear();

console.log('Size of the Set after clearing:', integerSet.size);


//Question 7: Map Value Update

// Create a Map to store city populations

// Create a Map to store city populations
let cityPopulation = new Map();

cityPopulation.set('phillipines', 8622698);
cityPopulation.set('ney york', 3999759);
cityPopulation.set('austria', 2716000);
cityPopulation.set('australiya', 2320268);
cityPopulation.set('nz', 1680992);

function updateCityPopulation(city, newPopulation) {
    if (cityPopulation.has(city)) {
        cityPopulation.set(city, newPopulation);
        console.log(`Population of ${city} updated to ${newPopulation}`);
    } else {
        console.log(`${city} not found in the map.`);
    }
}

updateCityPopulation('phillipines', 8744837);

updateCityPopulation('Miami', 463347);
console.log('Updated Population of phillipines:', cityPopulation.get('phillipines'));


//Question 8: Set Contains


// Create a Set to store programming language names
let programmingLanguages = new Set();

programmingLanguages.add('JavaScript');
programmingLanguages.add('Python');
programmingLanguages.add('Java');
programmingLanguages.add('C++');
programmingLanguages.add('C')
function hasProgrammingLanguage(language) {
    return programmingLanguages.has(language);
}


let languageToCheck = 'Python';
if (hasProgrammingLanguage(languageToCheck)) {
    console.log(`${languageToCheck} exists in the Set.`);
} else {
    console.log(`${languageToCheck} does not exist in the Set.`);
}

let languageToCheck2 = 'Swift';
if (hasProgrammingLanguage(languageToCheck2)) {
    console.log(`${languageToCheck2} exists in the Set.`);
} else {
    console.log(`${languageToCheck2} does not exist in the Set.`);
}



// /question 9: Map Keys and Values


let countryLanguage = new Map();

countryLanguage.set('USA', 'English');
countryLanguage.set('France', 'French');
countryLanguage.set('Germany', 'German');
countryLanguage.set('Japan', 'Japanese');
countryLanguage.set('India', 'Hindi');

console.log('Country Names:');
for (let country of countryLanguage.keys()) {
    console.log(country);
}

console.log('\nOfficial Languages:');
for (let language of countryLanguage.values()) {
    console.log(language);
}



//Question 10: Set Remove
//Create a JavaScript program that uses a Set to store the names of colors. Implement a function to remove a specific color from the Set and print the updated set of colors.

let colorsSet = new Set();
colorsSet.add('Red');
colorsSet.add('Green');
colorsSet.add('Blue');
colorsSet.add('Yellow');
colorsSet.add('Purple');
function removeColor(colorToRemove) {
    if (colorsSet.has(colorToRemove)) {
        colorsSet.delete(colorToRemove);
        console.log(`${colorToRemove} has been removed.`);
    } else {
        console.log(`${colorToRemove} was not found in the set.`);
    }
}

console.log('Original Set of Colors:', colorsSet);

removeColor('Green');

removeColor('Orange');
console.log('Updated Set of Colors:', colorsSet);