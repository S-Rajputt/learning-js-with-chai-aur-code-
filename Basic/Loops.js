// const arr=[1,35,567,4,21]

//  for of loop 

// for (const num of arr) {
//     console.log(`elements in array ${num}`)
// }


// objects

const myObj={
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//  for in loop 

for (const key in myObj) {
    // console.log(`${key} shrotcut for ${myObj[key]}`)
}
//  if we pass ${key} that tine print the only key 
// if we pass ${myObj[key]} that time value will be get in the return form

const myString=['js', 'java', 'cpp', 'dsa', 'python']

for (const key in myString) {
    // console.log(`${key}`) 0,1,2,3,4
    // console.log(myString[key])
} 

//  for each loop 

const coding =[ 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item){
// console.log(item)
// })


// coding.forEach((item)=>{
// console.log(item)
// })


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding=[{
    languageName:'javscript',
    languagefileName:'js'
},
{
    languageName:'Java',
    languagefileName:'springBoot'
},
{

    languageName:'ruby',
    languagefileName:'rails'
}
]
myCoding.forEach((item)=>{
     console.log(item.languageName)
})
