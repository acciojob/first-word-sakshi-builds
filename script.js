function firstWord(str) {
  let i = 0;

  // Skip leading spaces manually
  while (i < str.length && str[i] === " ") {
    i++;
  }

  let word = "";

  while (i < str.length && str[i] !== " ") {
    word += str[i];
    i++;
  }

  return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
