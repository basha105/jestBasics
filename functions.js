function capitalize(word){
    let firstLetter = word[0];
    let newFirstLetter = firstLetter.toUpperCase();
    let newWord = newFirstLetter.concat(word.slice(1));
    return newWord;
}

function reverseString(word) {
    let charArray = [];
    for (let i=word.length-1; i>-1; i--) {
        charArray.push(word[i]);
    }
    let newWord = charArray.join('');
    return newWord;
}

function calculator(a, op, b,) {
    if (op =='+') {
        return a + b;
    }
    else if (op == '-') {
        return a - b;
    }
    else if (op == '/') {
        return a/b;
    }
    else if (op == 'x') {
        return a*b;
    }
    else {
        return "Impossible.";
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator
}