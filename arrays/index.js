const arr = [1, "Jordan", true, {name: "JH"}, () => console.log("yo")];
// array literal (created using symbols)

const obj = new Array(5); // creates a blank array of length 5
// 12
// 'jh'
// []
for (let val of arr) {
    console.log(val);
    
}

const nums = [1,2,3,4,5]

nums.pop()

nums

nums.push()

nums.push(5)

nums
nums.shift()

nums
nums.unshift(1)


nums.join(", ")
nums.sort()
nums.sort((a, b) => a -b)
const toSort = [8, 12, 6, 19, 4];

toSort.sort((a, b) => a -b)
toSort.sort((a, b) => b - a)
const trainers = [
    {
        name: "JH",
        age: 30
    },
    {
        name: 'PB',
        age: 28
    }
]
trainers.sort((a,b) => a.age - b.age);
nums
trainers
nums.forEach(num => console.log(num))

nums.map(num => num ** 3)
nums.filter(num => num % 2 === 0)
nums.filter(num => num % 2 === 0).map(num => num ** 3) .forEach(num => console.log(num))

nums.reduce((next, acc) => next + acc)

nums.reduce((next, acc) => next * acc)
