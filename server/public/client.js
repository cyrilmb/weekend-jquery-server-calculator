$(document).ready(onReady);

let operand;

function onReady() {
  console.log('ready the floops');

  $(`#calcDiv`).on(`click`, `.opBut`, selectOp);
  $(`#calcDiv`).on(`click`, `#eqBut`, eqFunc);
  $(`#calcDiv`).on(`click`, `#clearBut`, clearInputs);
}

function selectOp() {
  operand = $(this).val();
  console.log('operand:', operand);
}

//Send input to server
function eqFunc() {
  let sendEq = {
    numbOne: Number($(`#numbOne`).val()),
    operand: operand,
    numbTwo: Number($(`#numbTwo`).val()),
  };
  console.log('in POST sendeq:', sendEq);
  $.ajax({
    method: 'POST',
    url: '/calc',
    data: { sendEq },
  })
    .then((response) => {
      render(response);
    })
    .catch(function (err) {
      alert(
        'Math is dead. Physical forms collapse. The Old Gods descend.',
        err
      );
    });
}

function render() {
  // get eqResult and append
  $.ajax({
    method: 'GET',
    url: '/calc',
  }).then((response) => {
    console.log(`Render:`, response);

    $(`#solutionDiv`).empty();
    $(`#solutionDiv`).append(response[response.length - 1]);

    $('#historyDiv').empty();
    for (result of response) {
      $(`#historyDiv`).append(`<li>${result}</li>`);
    }
  });
}

function clearInputs() {
  $(`#numbOne`).val('');
  $(`#numbTwo`).val('');
}
