const me  = {
    name: 'jh',
    age: 30,
    weapon: true
}

JSON.stringify(me);
//'{"name":"jh","age":30,"weapon":true}'
const trainers = [
    me,
    {
        name: 'pb',
        age: 28,
        weapon: true
    }
]
const str = JSON.stringify(trainers);
str
//'[{"name":"jh","age":30,"weapon":true},{"name":"pb","age":28,"weapon":true}]'
JSON.parse(str)