// const person = {
//     name : "Dev",
//     age : 22 ,
//     isMarried: false 
// }

// // const name = person.name 
// // const age = person.age 
// // const isMarried = person.isMarried

// // Destructuring
// const {name,age,isMarried} = person

// 2.....
// const name = "Dev"
// const age = 22
// const isMarried = false

// const person = {
//     name ,
//     age ,
//     isMarried
// }

// console.log(person.name + person.age + person.isMarried)

// 3... spread operator
 const person = {
     name : "Dev",
     age : 22 ,
     isMarried: false 
}

const person2 = {...person, name: "jack"}

const names = ["dev","deb","ashish"]
const names2 = [...names, "joel"]

console.log(names2)
