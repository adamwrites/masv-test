const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'meaning',
        message: 'Please enter a number followed by a string of letters. You may do this multiple times seperated by a space.'
    });

    console.log(response.meaning);
    arrayOfResponse = response.meaning.split(" ");
    arrayOfResponse.forEach(
        element => printAnswer(element));
})();

function printAnswer(param) {
    var characters = param.split("");
    console.log(characters);
    characters.forEach(
        character => nextChar(character)    
    )
    // console.log(characters[1]);

    // nextChar(characters[1], characters[0]);
    // nextChar(characters[2], characters[0]);
}
//from Stack Overflow :)
function nextChar(c, num=1) {
    console.log(String.fromCharCode(c.charCodeAt(0) + 1));
}