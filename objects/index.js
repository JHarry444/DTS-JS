const obj = new Object();
const obj2 = new Object();

const objLiteral = {
    a: 12,
    b: true,
    c: () => console.log("yo")
}

const me = {
    name: "JH"
}

me.age = 30;

me

me.ag = 30;

delete me.ag;

me
me['job'] = 'trainer';
me
for (let key in me) {
    console.log("Key:", key, "Val:", me[key]);
}

me
const name = me.name;

const { age } = me;

age

let intro = (person) => {
console.log("Hello, my name is", person.name, "I am", person.age, "years old and I am a", person.job);
}

intro(me)

intro = ({name, age, job}) => {
console.log("Hello, my name is", name, "I am", age, "years old and I am a", job);
}

intro(me)

me
const nums = [1,2,3,4,5];

nums

const [a, b] = nums;

a

b

const [first, ...rest] = nums;
first

rest
const clone = [...nums];
clone
console.log(nums)

console.log(...nums)
const {job: occupation} = me;
occupation