const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001; //⬅ when a request is made here to local host, it's sent to the get function = res. 

app.use(express.json());
app.use(express.static('server/public')); //⬅sends over client side code from axios calls

// Global variable that will contain all of the
// calculation objects: .. server side manipulates the data. seperation of concerns. adds, edits deletes ect
let calculations =   [
  {
    numOne: 3,
    numTwo: 5,
    operator: '+',
    result: 8
  },
  {
    numOne: 11,
    numTwo: 7,
    operator: '-',
    result: 4
  }
]
// Here's a wonderful place to make some routes:

// GET /calculations
app.get ('/calculations',(req, res) => { 
  console.log('GET/ cals from client to sever');
  res.send(calculations); //from /localhost 5001, the get request responds, aka res.send with calculations perameter.
                          // sends back to client side.. this can be viewed in the console.
})
// POST /calculations


// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
