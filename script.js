function firstWord(str) {
  // your code here
	let word=""
for(let i=0;i<str.length;i++){
	if(str[i]==" ")
    break;
    word=word+str[i];
    
}
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
