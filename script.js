const genButton = document.getElementById("generate");
const userName = document.getElementById("userName");
const roundText = document.getElementById("round");
const userNum1 =  document.getElementById("userNum1");
const userNum2 =  document.getElementById("userNum2");
const userNum3 =  document.getElementById("userNum3");
const compNum1 =  document.getElementById("compNum1");
const compNum2 =  document.getElementById("compNum2");
const compNum3 =  document.getElementById("compNum3");
const userRes =  document.getElementById("userRes");
const compRes =  document.getElementById("compRes");

let round = 0;
let numberU, numberC;
let name = '';
let sumU = 0, sumC = 0;
function Start() {
    if (name != ''){
            generate();
            if (round == 3){
                alert("It's the end of game!");
                genButton.disabled = true;
                userRes.innerHTML  = sumU;
                compRes.innerHTML = sumC;
                numberU = numberC = 0;
                Highlight(userRes, compRes,sumU,sumC);
                if (sumU > sumC){alert("YOU WIN!");}
                else if (sumC > sumU){alert("YOU LOST!");}
            }
            else{
                round +=1;
                roundText.innerHTML = `${round}/ 3`
            }  
        } 
    else{
        name = prompt("Enter your name: ");
        if (name == '') {alert("ENTER NAME!");
        } else {userName.innerHTML = name; }
    }
}
function generate(){
    numberU = Math.floor(Math.random() * 100);
    sumU +=numberU;
    numberC = Math.floor(Math.random() * 100);
    sumC +=numberC;

    switch(round){
        case 0:
            userNum1.innerHTML = numberU;
            compNum1.innerHTML = numberC;   
            Highlight(userNum1,compNum1,numberU,numberC);
            break;
        case 1:
            userNum2.innerHTML = numberU;
            compNum2.innerHTML = numberC;
            Highlight(userNum2,compNum2,numberU,numberC);
            break;
        case 2:
            userNum3.innerHTML = numberU;
            compNum3.innerHTML = numberC;
            Highlight(userNum3,compNum3,numberU,numberC);
            break;
    }    
}
function Highlight(inputU, inputC, numU, numC){
    if (numU > numC){
        inputC.style.backgroundColor = "rgba(234, 186, 186, 0.5)";    
        inputU.style.backgroundColor = "rgba(181, 233, 181, 0.5)";
    }else if (numU < numC){
        inputU.style.backgroundColor = "rgba(234, 186, 186, 0.5)";    
        inputC.style.backgroundColor = "rgba(181, 233, 181, 0.5)";    
    }     
}

