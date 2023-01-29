$(document).ready(onReady);

function onReady() {
  console.log("ready the floops");

  $(`#calcDiv`).on(`click`, `#addBut`, addFunc);
  $(`#calcDiv`).on(`click`, `#subBut`, subFunc);
  $(`#calcDiv`).on(`click`, `#multBut`, multFunc);
  $(`#calcDiv`).on(`click`, `#divBut`, divFunc);
  $(`#calcDiv`).on(`click`, `#eqBut`, render);
  $(`#calcDiv`).on(`click`, `#clearBut`, clearInputs);
}

//Send input numbers to server
function addFunc() {
  let sendEq = {
    numbOne: Number($(`#numbOne`).val()),
    operand: $(`#addBut`).val(),
    numbTwo: Number($(`#numbTwo`).val()),
  };
  $.ajax({
    method: "POST",
    url: "/calc",
    data: { sendEq },
  })
    .then((response) => {})
    .catch(function (err) {
      alert("Math is dead. Physical forms collapse. The Old Gods descend.");
    });
}

function subFunc() {
  let sendEq = {
    numbOne: Number($(`#numbOne`).val()),
    operand: $(`#subBut`).val(),
    numbTwo: Number($(`#numbTwo`).val()),
  };
  $.ajax({
    method: "POST",
    url: "/calc",
    data: { sendEq },
  })
    .then((response) => {})
    .catch(function (err) {
      alert("Math is dead. Physical forms collapse. The Old Gods descend.");
    });
}

function multFunc() {
  let sendEq = {
    numbOne: Number($(`#numbOne`).val()),
    operand: $(`#multBut`).val(),
    numbTwo: Number($(`#numbTwo`).val()),
  };
  $.ajax({
    method: "POST",
    url: "/calc",
    data: { sendEq },
  })
    .then((response) => {})
    .catch(function (err) {
      alert("Math is dead. Physical forms collapse. The Old Gods descend.");
    });
}

function divFunc() {
  let sendEq = {
    numbOne: Number($(`#numbOne`).val()),
    operand: $(`#divBut`).val(),
    numbTwo: Number($(`#numbTwo`).val()),
  };
  $.ajax({
    method: "POST",
    url: "/calc",
    data: { sendEq },
  })
    .then((response) => {})
    .catch(function (err) {
      alert("Math is dead. Physical forms collapse. The Old Gods descend.");
    });
}

function render() {
  // get eqResult and append
  $.ajax({
    method: "GET",
    url: "/eqResult",
  }).then((response) => {
    console.log(`Render:`, response);

    $(`#solutionDiv`).empty();
    $(`#solutionDiv`).append(response);
  });
  //get calcArr and append
  $.ajax({
    method: "GET",
    url: "/calc",
  }).then((response) => {
    console.log(`Render:`, response);

    $(`#historyDiv`).empty();
    for (let i = 0; i < response.length; i++) {
      let listItem = response[i];
      $(`#historyDiv`).append(`<li>${listItem}</li>`);
    }
  });
}

function clearInputs() {
  $(`#numbOne`).val("");
  $(`#numbTwo`).val("");
}
