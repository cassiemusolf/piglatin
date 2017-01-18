var latin = "ay";
var vowels = ['a', 'e', 'i', 'o', 'u'];

var translator = function(userInput) {
  for (var i = 0; i < vowels.length ; i++) {
    if (vowels.includes(userInput.charAt(0))) {
      return userInput += latin;
    } else if (!vowels.includes(userInput.charAt(0,1))) {
      return userInput += "sky";
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
