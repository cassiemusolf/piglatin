var latin = "ay";
var vowels = ['a', 'e', 'i', 'o', 'u'];


var translator = function(userInput) {
  for (var i = 0; i < userInput.length ; i++) {
    if (vowels.includes(userInput.charAt(0))) {
      return userInput += latin;
    } else if ((vowels.indexOf(userInput[0] === !vowels)) && (vowels.indexOf(userInput[1] === !vowels))) {
      return userInput.slice(2, userInput.length) + userInput.slice(0,2) + "ay";
    } else if (vowels.indexOf(userInput[0] === !vowels)) {
      return userInput.slice(1, userInput.length) + userInput.slice(0,1) + "ay";
    } else {
        return false;
      }
    }
  }


$(function () {
  $('form').submit(function() {
   var userInput = $('input#pig').val();
   var translatedWord = translator(userInput);
  $('.display').text(translatedWord);
  event.preventDefault();
  });
});
