const prompts = require('prompts');
 
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'Please enter a number followed by a string of letters'
  });
 
  console.log(response.meaning);
  arrayOfResponse = response.meaning.split(" ");
  arrayOfResponse.forEach(element => console.log(element));


})();