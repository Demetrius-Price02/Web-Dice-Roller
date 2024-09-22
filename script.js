
function setVolume() {
    var myAudio = document.getElementById("audio1");
    autostart= true;
    loop = true;  
    myAudio.volume = 0.1; 
}

function RollDie () { //Rolls dics
    return Math.floor(Math.random() * 6 + 1)
}
function RollDice() { //What happens when the button is pressed
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const disSum = document.getElementById("sum");
    const disSum2 = document.getElementById("sum2");

    const result1 = RollDie();
    const result2 = RollDie();
    const result3 = RollDie();
    const result4 = RollDie();

    const sum = result1 + result2
    const sum2 = result3 + result4

    die1.innerHTML = result1;
    die2.innerHTML = result2;
    disSum.innerHTML = "Your sum: "+ sum;
    disSum2.innerHTML = "Computer sum: "+ sum2;

    //Compare the numbers to see if the user wins
    if (sum > sum2) {
        document.querySelector("h1").innerHTML = "You win!";
            } 

    if (sum < sum2) {
        document.querySelector("h1").innerHTML = "You lose. Try again!";
            }

    if (sum == sum2) {
        document.querySelector("h1").innerHTML = "Draw!";
            }
    }

function Roll() {
    console.log("roll");
}