const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Please enter a number followed by a string of letters. You may do this multiple times seperated by a space.'
    });

    // making sure there is atleast one character
    if(response.answer.length <= 1){
        console.log("ERROR: You need at least one character")
    }

    //split on space to handle multiple inputs at once
    arrayOfResponse = response.answer.split(" ");
    arrayOfResponse.forEach(
        element => printAnswer(element)),
        process.stdout.write(`\n`);
}
)();

function printAnswer(param) {
    var characters = param.split("");
    var number = characters[0];

    //remove the number
    characters.shift();

    characters.forEach(
        character => nextChar(character,number) ,
        process.stdout.write(`${" "}`),
    )
}

//generate new letters based on initial number

function nextChar(c="", num=1) {
    var ASCII = c.charCodeAt(0) + parseInt(num)
    if (ASCII > 122) {
        var newLetter = String.fromCharCode((c.charCodeAt(0) + parseInt(num)) % 122 + 96);
    }
    else{
        var newLetter = String.fromCharCode(c.charCodeAt(0) + parseInt(num));
    }
    process.stdout.write(`${newLetter}`);
}