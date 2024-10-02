// GET 2 INTEGERS THROUGH PROMPTS 
let intA = parseInt(prompt("Enter the first integer"));
let intB = parseInt(prompt("Enter the second integer"));

// VALIDATION
if (isNaN(intA) || isNaN(intB)) {
    document.write("You did not input valid integers.");
    } else {
    //COMPARE 2 INTEGERS
    if (intA == intB){
        document.write("Both numbers are equal", intA)
        } else if (intA < intB){
            document.write (`The second integer (${intB}) is larger.`)
        } else {
            document.write (`The first integer (${intA}) is larger.`)
        }
    }

