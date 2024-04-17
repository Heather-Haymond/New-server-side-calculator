console.log("client.js is sourced!"); // showing and looks is client side concerns

function getCalcs() {
  axios({
    // ⬅ axios recieves requests from the client from the serer
    method: "GET", // ⬅ & uses the specidfied methos to manipulate the data
    url: "/calculations", //⬅ axios also can be called through the URL. A GET request looks like Localhost:5001/calculations in URL
  }).then((response) => {//⬅ THEN when server gets the data from the sever, we respond with the data that was requested. Here it is the calculations array of objects that are the calculation attributes.
    let calcHerStory = response.data; //⬅ puts the responce data into a variable for convience and readibility.
   // ---- ⬇ --- ths code handles calculations history
    let calcList = document.getElementById("calcList"); //Select the UL from HTML that will be modified and rendered
    calcList.innerHTML = ""; //⬅ clears the contents of the UL

    for (let calc of calcHerStory) {//⬅ loop through the data you got from GET request. this example we want a string that looks like this `${} ${} ${} = ${}` ex: 1 + 2 = 3
      let calcListItem = ` 
            <li>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</li>
            `; // ⬅backticks allow for string interpelation.⬆loops though the string we want to add
    //to display the most recent calculation.. it needs a place to be rendered. a <ul> needed for the responces to go; aka rendeded
      calcList.innerHTML += calcListItem; // ⬅adds new li to the calcList UL in the HTML. could be written  calcList.innerHTML += <li>${calc.num1} ${calc.operator} ${calc.num2} = ${calc.result}</>`
    }
     //----⬆-- this handles the history result
     // ---⬇--- this code handles the calculations result
     let lastResInArray = calcHerStory[calcHerStory.length - 1].result;// .at(-1) gives the last item in the array. aka the latest result

     let calcResultParagraph = document.getElementById("calcResult"); // selects the <p> where I want to render my last and most recent result
     calcResultParagraph.textContent = lastResInArray; // selects the <p> text content to the last and most recent result
     // -- ⬆ this code handles calculations result <p>
  });
}

 // Function to clear input fields after game has run
 function clearInputsClick(event) {
    event.preventDefault()
    document.getElementById('numOne').value = '';
    document.getElementById('numTwo').value = '';
}

//buttons to push functions
function addClick(event){
    event.preventDefault();
    console.log("add")
    operator = "+";
}

function subtractClick(event){
    event.preventDefault();
    console.log("subtract")
    operator = "-";
}

function devideClick(event){
    event.preventDefault();
    console.log("divide");
    operator = "/";
}

function multiplyClick(event){
    event.preventDefault();
    console.log("multiply")
    operator = "*";
}

function equalsClick(event){
    event.preventDefault();
    console.log("equals");
    //generate data
    numOne = document.getElementById("numOne").value;
    console.log("numOne is", numOne);
    numTwo = document.getElementById("numTwo").value;
     console.log("numTwo is", numTwo);
    //operator is set
    console.log("operator is", operator);
     // Send calculation data to the server
    sendCalculationToServer(numOne, numTwo, operator);
}

// POST ->Create
  // Function sends new calculations back over to the server
  function sendCalculationToServer (numOne, numTwo, operator) {  
    let calculationData = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
      };
    axios.post('/calculations', calculationData)
      .then(response => {
        console.log('Sent!!:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

getCalcs(); // ⬅fuction must me called outside of the function to be utelized & applied
