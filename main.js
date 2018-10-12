let app = new Vue({

  el: "#app",

  data: {

    boxedText: '',
    charCount: 0,
    wordCount: 0,
    sentCount: 0,
    longestWord: '',
    numParagraphs: 0,
    freqChar: 0,
    typedText: '',
  },

  methods: {

      calculations: function() {
        //counts the characters
        this.charCount = this.boxedText.replace(/\s/g, "").length;

        //counts the words
        this.wordCount = this.boxedText.split(" ").length;

        //counts the sentences
        this.sentCount = this.boxedText.split(".").length-1;

        //prints number of paragraphs
        this.numParagraphs = this.boxedText.split("\n\n").length;

        //prints longest word
        let textArray = this.boxedText.split(" ");
        textArray.sort(function(a, b){return b.length - a.length});
        this.longestWord = textArray[0];

        //prints most frequent character -- optimization opportunity
        let originalText = this.boxedText;
        let testCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let max = 0;

        for (i = 0; i < testCase.length; i++) {
          let counter = 0
          for (j = 0; j < originalText.length; j++) {
            if (originalText[j] == testCase[i]) {
              counter++
              }
            }
            if (counter > max) {
              max = counter;
              this.freqChar = testCase[i];
          }
        }

      return this.typedText = this.boxedText;

      }

  }


})
