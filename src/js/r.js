// Set up global namespace.
r = {};

r.getColor = function(word) {
  var hash = $.md5(String(word).toLowerCase());
  console.log(hash); // TEMP
  
  var redHex = hash.substring(0, 2);
  var greenHex = hash.substring(2, 4);
  var blueHex = hash.substring(4, 6);
  
  var redInt = parseInt(redHex, 16);
  var greenInt = parseInt(greenHex, 16);
  var blueInt = parseInt(blueHex, 16);
  
  var color = ('0' + Math.round(redInt * 0.75).toString(16)).slice(-2) +
              ('0' + Math.round(greenInt * 0.75).toString(16)).slice(-2) +
              ('0' + Math.round(blueInt * 0.75).toString(16)).slice(-2);
  console.log(color); // TEMP
  return '#' + color;
}

r.formatTokens = function(tokens) {
  var formattedTokens = [];
  var isWordRegEx = /^[A-Za-z]+$/;
  var formattedToken;
  for (var i = 0; i < tokens.length; i++) {
    if (isWordRegEx.test(tokens[i])) {
      formattedToken = r.formatWord(tokens[i]);
    } else {
      formattedToken = tokens[i];
    }
    formattedTokens.push(formattedToken);
  }
  return formattedTokens;
};

r.formatWord = function(word) {
  return '<span style="color: ' + r.getColor(word) + ';">' +
           '<b>' + word.substring(0, 1) + '</b>' + word.substring(1) +
         '</span>';
};

r.processInput = function(textSourceId, outputId) {
  var textSource = $(textSourceId);
  console.log(textSource); // TEMP
  var text = textSource.val();
  console.log(text); // TEMP
  var tokens = r.tokenize(text);
  console.log(tokens); // TEMP
  var formattedTokens = r.formatTokens(tokens);
  console.log(formattedTokens); // TEMP
  $(outputId).html(formattedTokens);
};

r.tokenize = function(text) {
  var tokens = [];
  var chars = text.split('');
  var isLetterRegEx = /[A-Za-z]/;
  var tempToken = '';
  var lastCharWasLetter = false;
  for (var i = 0; i < chars.length; i++) {
    if (isLetterRegEx.test(chars[i])) {
      if (lastCharWasLetter) {
        tempToken += chars[i];
      } else {
        if (tempToken !== '') {
          tokens.push(tempToken);
        }
        tempToken = chars[i];
      }
      lastCharWasLetter = true;
    } else {
      if (lastCharWasLetter) {
        if (tempToken !== '') {
          tokens.push(tempToken);
        }
        tempToken = chars[i];
      } else {
        tempToken += chars[i];
      }
      lastCharWasLetter = false;
    }
  }
  if (tempToken !== '') {
    tokens.push(tempToken);
  }
  return tokens;
};
