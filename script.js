function firstWord(str) {
  // your code here
	let word=""
for(let i=0;i<str.length;i++){
    word=word+str[i];
    if(str[i]==" ")
    break;
}
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
