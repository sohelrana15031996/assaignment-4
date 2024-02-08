function checkName(givenName) {
  
  if (typeof givenName === 'string') {
    const formatteName = givenName.toLowerCase();
    const lastLetter = formatteName.length - 1;
    if (formatteName[lastLetter] === 'a' || formatteName[lastLetter] === 'y' || formatteName[lastLetter] === 'i' || formatteName[lastLetter] === 'e' || formatteName[lastLetter] === 'o' || formatteName[lastLetter] === 'u' || formatteName[lastLetter] === 'w') {
      const returnMessage = givenName + " is a good name.";
      return returnMessage;
    } else {
      return "Bad name."
    }
  }else {
    return "This is not a name. Please enter a name."
  }
}

// console.log(checkName("khalil"));