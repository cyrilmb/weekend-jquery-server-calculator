const express = require("express");
const app = express();
app.use(express.static("./server/public"));
app.use(express.urlencoded({ extended: true }));

let calcArr = [];
let eqResult = "";

// let integerOne = $(`#integerOne`).val();
// let integerTwo = $(`#integerTwo`).val();

const PORT = 5000;
app.listen(PORT, () => {
  console.log("The internet is speaking");
});

//Take object with numbers and operand, turn into an equation with solution as
//an object and add to calcArr.
app.post("/calc", (req, res) => {
  console.log("in /calc POST:", req.body);
  console.log(req.body.sendEq.operand);

  switch (req.body.sendEq.operand) {
    case "+":
      eqResult =
        Number(req.body.sendEq.numbOne) + Number(req.body.sendEq.numbTwo);
      break;
    case "-":
      eqResult =
        Number(req.body.sendEq.numbOne) - Number(req.body.sendEq.numbTwo);
      break;
    case "*":
      eqResult =
        Number(req.body.sendEq.numbOne) * Number(req.body.sendEq.numbTwo);
      break;
    case "/":
      eqResult =
        Number(req.body.sendEq.numbOne) / Number(req.body.sendEq.numbTwo);
      break;
  }

  eqResult = String(Math.round(eqResult * 1000) / 1000);

  console.log(`eqResult:`, eqResult);

  let equation = `${req.body.sendEq.numbOne} ${req.body.sendEq.operand} ${req.body.sendEq.numbTwo} = ${eqResult}`;

  console.log(`equation:`, equation);

  calcArr.push(equation);

  console.log(`calcArr:`, calcArr);
  res.sendStatus(201);
});

app.get("/eqResult", (req, res) => {
  console.log("In /eqResult GET:", eqResult);

  res.send(eqResult);
});

app.get("/calc", (req, res) => {
  console.log("In /calc GET:", calcArr);

  res.send(calcArr);
});
