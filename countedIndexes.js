function countLetters(string) {
  // body...
  var counted = {};

  for (var i = 0; i < string.length; i++) {
    if(string[i] !== " ") {
      var key = string[i];
      if(counted[key]) {
        counted[key].push(i);
      } else {
        counted[key] = [i];
      }
    }
  }
  return counted;
}



console.log(countLetters("lighthouse in the house"));