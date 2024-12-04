function capitalize(word){
    let firstLetter = word[0];
    let newFirstLetter = firstLetter.toUpperCase();
    let newWord = newFirstLetter.concat(word.slice(1));
    return newWord;
}

function reverseString(word) {
    
}

module.exports = {
    capitalize,


}