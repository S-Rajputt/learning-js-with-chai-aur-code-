//  Map, filter , reduce

// const coding=['js', 'ruby', 'java', 'cpp', 'python']

// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)


const myNums=[1,2,3,4,5,6,7,8,9]

// let newNums=myNums.filter((num)=>  num>4
// )
// console.log(newNums)

const myTotal=myNums.reduce((acc, crValue)=>{
    return acc+crValue
}, 0)

console.log(myTotal)
 