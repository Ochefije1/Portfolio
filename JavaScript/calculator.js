
    function getValues() {
      let firstValue = parseInt(document.getElementById("firstNumber").value);
      let secondValue = parseInt(document.getElementById("secondNumber").value);

      console.log("Pstone Calculator");

      if (firstValue && secondValue) {
        return [firstValue, secondValue];
      } else {
        alert("Please Enter Valid Values");
      }
    }

    function add() {
      let [firstValue, secondValue] = getValues();
      let result = firstValue + secondValue;
      document.getElementById("result").innerHTML = result;
    }

    function sub() {
      let [firstValue, secondValue] = getValues();
      let result = firstValue - secondValue;
      document.getElementById("result").innerHTML = result;
    }

    function mul() {
      let [firstValue, secondValue] = getValues();
      let result = firstValue * secondValue;
      document.getElementById("result").innerHTML = result;
    }

    function div() {
      let [firstValue, secondValue] = getValues();
      let result = firstValue / secondValue;
      document.getElementById("result").innerHTML = result;
    }

    function clr() {
      document.getElementById("firstNumber").value = "";
      document.getElementById("secondNumber").value = "";
      document.getElementById("result").innerHTML = "";
    }