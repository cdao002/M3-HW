let intInput = parseInt(prompt ("Input an integer from 1 to 100: "))

if (isNaN (intInput) ||intInput <1 || intInput >100){
    console.log("Only numbers between 1 and 100 are accepted.")
} else {
    if (intInput >= 90){
        console.log ("You received an A");
    } else if (intInput >= 80){
        console.log ("You received an B");
    } else if (intInput >= 70){
        console.log ("You received an C");
    } else if (intInput >= 60){
        console.log ("You received an D")
    } else {
        console.log ("You received an F")
    }       
}
