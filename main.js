function excercise1 () {
    let myColor = ['Red','Green','White','Black'];
    let a = myColor.join(',');
    document.getElementById('ex1').innerHTML = a;
}

function excercise2 () {
    let number = prompt('Enter string of number: ');
    let numberString = number.toString();
    let numberArray = [];
    for (i=0;i<numberString.length;i++){
        if (numberString[i+1]%2==0&&numberString[i]%2==0){
            numberArray.push(numberString[i]);
            numberArray.push('-');
        }
        else {
            numberArray.push(numberString[i]);
        }
    }
    document.getElementById('ex2').innerHTML = numberArray.join('');
}

function excercise3 () {
    let string = prompt('Enter a string');
    let result = [];
    for (i=0;i<string.length;i++){
        if (string[i] == string[i].toUpperCase()){
            result.push(string[i].toLowerCase());
        }
        else if (string[i] == string[i].toLowerCase()){
            result.push(string[i].toUpperCase());
        }
        else {
            result.push(string[i]);
        }
    }
    document.getElementById('ex3').innerHTML=result.join('');
}