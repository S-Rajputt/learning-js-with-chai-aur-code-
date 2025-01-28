const user ={
    Username:"Sachin",
    Price:999,
    WelcomeMessage: function(){
        console.log(`${this.Username}, Welcome to website`)
        console.log(this)
    }

}

// user.WelcomeMessage();
// user.Username='Sam'
// user.WelcomeMessage();
// console.log(this)

//  Normal function 

// function chai(){
//     console.log("hello")
//     // console.log(this)
// }
// chai()


// Arrow function

const chai= () =>{
    let Username="sachin"
    console.log(Username)
}
// chai()

const addTwoNum=(num1, num2)=> num1+num2
console.log(addTwoNum(3,8))



const MyArr =[1,43,556,2,5]