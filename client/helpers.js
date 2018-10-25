module.exports = {
  copyTextToClipboard: (id) => {
    var letter = document.getElementById(id);
    letter.select();
    document.execCommand('copy');
  },
  findTemplatePhrases: (string, char) => {
    let savedWords = [];
    const begin = char[0];
    const end = char[1];

    for (let i = 0; i < string.length; i++) {
      var currentChar = string[i];
      if (currentChar === begin) {
    
        for (let j = i + 1; j < string.length; j++) {
          var secondChar = string[j];
          if (secondChar === end) {
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
