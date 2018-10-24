module.exports = {
  copyTextToClipboard: (nameOfClass) => {
    var letter = document.getElementsByClassName(nameOfClass)[0];
    letter.select();
    document.execCommand('copy');
  },
  findTemplatePhrases: (string) => {
    let savedWords = [];
  
    for (let i = 0; i < string.length; i++) {
      var currentChar = string[i];
      if (currentChar === '[') {
    
        for (let j = i + 1; j < string.length; j++) {
          var secondChar = string[j];
          if (secondChar === ']') {
            var saved = string.slice(i + 1, j);
            i = j + 1;
            if (!savedWords.includes(saved)) {
              savedWords.push(saved);
              break;
            }
          }
        }
      }
    }
    return savedWords;
  },
};
