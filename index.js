//1

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];

  function totalAmount(array) {
    return array.reduce((acc, item) => {
        return acc + item.amount;
    }, 0)
  }

  console.log(totalAmount(orders))

//2

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const incrementedNumbers = arrayOfNumbers.map((item) => item + 1);
console.log(incrementedNumbers)

//3

function filterEvens(array) {
    return array.filter((item) => {
        if(item % 2 === 0){
            return item
        }
    }
    )
}

console.log(filterEvens([1,2,3,11,12,13]));
console.log(filterEvens([22,2,31,110,6,13]));

//4

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

// const capitalizedFriends = friends.map(element => {
//       return element.charAt(0).toUpperCase() + element.slice(1);
//     });
// // console.log(capitalizedFriends)


function filterItems(array, str) {

    return array.filter((item) => {
        if(item.includes(str)) {
            return item;
            
        }
    }
    ).map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1);

    })
}
console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));

//5

function sum(array) {
    return array.reduce((acc, item) => {
        return acc + item;
    }, 0)
  }
console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));

//6

const numbers = [1,4,9,16,25];

function squareRoot(array) {
    return array.map((item) => Math.sqrt(item));
  }

console.log(squareRoot(numbers));
