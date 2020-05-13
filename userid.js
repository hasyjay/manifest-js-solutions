
let odd = [];
let even = [];

let messages = (users) => {

    for (let i=1; i<=users; i++) {
        if(i % 2 === 0) {
          even.push(i)
        }
        else if (i % 2 !== 0) {
          odd.push(i)
        }
      }
}
  messages(100)
  


    console.log(`odd user ID's ${odd}`)

    console.log(`Even User ID's ${even}`)