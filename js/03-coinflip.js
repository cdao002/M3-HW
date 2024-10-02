let flip 
let randomNum = Math.round(Math.random())
let choice = prompt("Heads (H) or Tails (T)?").toUpperCase()
if ((choice !="H") && (choice !="T")){
    window.alert("Invalid selection")
} else {
    if (randomNum < 50){
        flip = "H";
        if (choice == flip){
            window.alert("The flip was heads and you chose heads...you win!")
            } else {
                window.alert("The flip was heads but you chose tails...you lose!")
            }
    } else {
        flip = "T";
        if (choice != flip){
            window.alert("The flip was tails but you chose heads...you lose!")
            } else {
                window.alert("The flip was tails and you chose tails...you win!")
            }
    }
}
