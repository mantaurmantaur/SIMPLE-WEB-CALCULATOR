// calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    const display = document.getElementById("display");

    if (display.value === "Error" || display.value === "undefined" || display.value === "function Error") {
        clearDisplay();
    }

 if (input === 'K') {

    if(display.value === "" || display.value === "0"){ 
      display.value = "-";
    }
    else
    {
       display.value = '-(' + display.value + ')';
    }
        return;
}
    const operators = ['+', '-', '*', '/', '.'];
    const lastChar = display.value.slice(-1);

    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }

    if (display.value === "0" && input !== ".") {
        display.value = input;
        return;
    }

    display.value += input;
}


function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}