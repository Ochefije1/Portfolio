

function ccValidation(){
  const a = document.getElementById("cardno"); 
  const btn = document.getElementById("btn");
let input = a.value;
  var cardno = /^(?:5[1-5][0-9]{14})$/;
  if (input.match(cardno))
  {
    a.style="border-color:green";
    btn.style="background-color:green";
    return true;
  }
      else
  {
    
    a.style="border-color:red";
    btn.style="background-color:red";
    alert("Not a valid credit card number!");
    return false;
  }
}

// const cleaveCC = new Cleave("#cardno", {
//   creditCard: true,
//   delimiter: "-",
  

// });

// const cleaveDate = new Cleave("#cardExpiry", {
//   date: true,
//   datePattern: ["m", "y"],
// });

// const cleaveCCV = new Cleave("#cardCcv", {
//   blocks: [3],
// });

