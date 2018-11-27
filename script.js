var words = ['window', 'apple', 'snowball', 'complicated', 'laboratory'];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answer = [];    //final array
for (var i = 0; i < word.length; i++) {
    answer[i] = ' ';
}

var lettersLeft = word.length;

while (lettersLeft > 0) {
    alert(answer.join(' ')); //chto seichas}

var yourChoice = prompt('Put your letter'); //vvod dannih

for (var j=0; j < word.length; j++) {  //refresh
    if (word[j] === yourChoice) {
        answer[j] = yourChoice;
        lettersLeft--;
      }
}
}
alert(answer.join(' '));
alert('Congrats! the word is ' + word);
// // if start.toString()
// (start.indexof());