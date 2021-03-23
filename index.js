const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Please enter a number followed by a string of letters. You may do this multiple times seperated by a space.'
    });

    console.log(response.answer);
    arrayOfResponse = response.answer.split(" ");
    arrayOfResponse.forEach(
        element => printAnswer(element));
})();

function printAnswer(param) {
    var characters = param.split("");
    var number = characters[0];
    //remove the number
    characters.shift();
    console.log(characters);
    characters.forEach(
        character => nextChar(character,number)  
    )
}

function nextChar(c="", num=1) {
    var newLetter = String.fromCharCode(c.charCodeAt(0) + parseInt(num));
    console.log(newLetter);
}