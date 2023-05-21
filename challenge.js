// Good Luck! You got this 💪🏾
// Write your code here.

let calculator = function(num1, num2, operator){
    if (operator == "+"){
        return num1 + num2;
    }

    else if (operator == "-"){
        return num1 - num2;
    }

    else if (operator == "*"){
        return num1 * num2;
    }

    else if (operator == "/"){
        return num1 / num2;
    }
}

console.log(calculator(5,3,"*"));
