const bt = document.getElementById("start")
const result = document.getElementById("result")

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

bt.addEventListener("click", async() => {
  let start = alert("Start Now");
  let random = Math.floor(Math.random() * 10 + 1)
  if (start === undefined) {
    while (userinput !== random) {
      var userinput = Number(prompt("Enter Your No."))

      if (isNaN(userinput)) {
        console.log("Invalid Input");
      }
      else if (userinput > 10 || userinput < 1) {
        console.log("NO.should be 1 to 10 , wrong input");
      }
      else {
        if (userinput > random) {
          console.log("Guess no. is greator them random")
          result.innerHTML= "Guess no. is greator them random" 
          await sleep(1000)
        }
        else if (userinput < random) {
          console.log("Guess no. is smaller them random")
          result.innerHTML= "Guess no. is smaller them random" 
          await sleep(1000)
        }
        else {
          console.log("WON")
          result.innerHTML= "_*_WON_*_" 
        }
      }
    }
  }
}
);