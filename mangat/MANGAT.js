let images = ["dice 1.png",
"dice 2.png",
"dice 3.png",
"dice 4.png",
"dice 5.png",
"dice 6.png"];
let dice = document.querySelectorAll("img");

function roll1(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#total1").innerHTML = (dieOneValue +1);
    },
    1000
    );
}
roll1();
function roll2(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieTwoValue);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total2").innerHTML = (dieTwoValue +1);
    },
    1000
    );
}
roll2();
function roll3(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#total1").innerHTML = (dieOneValue +1);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieTwoValue);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total2").innerHTML = (dieTwoValue +1);
    },
    1000
    );
}
roll3();
function sumUp(){
    const a=Number(document.querySelector("#total1").innerHTML);
    const b=Number(document.querySelector("#total2").innerHTML );
    const total = String (a+b);

    const resultMessage = "Majulah Sebanyak " + total + " Langkah";

    alert(resultMessage);
};