function deleteInvalids(inputArray){
  if(Array.isArray(inputArray) === true){
    let numberArray = [];
    for (i=0; i<inputArray.length; i++){
      if(typeof inputArray[i] === 'number' ){
        numberArray.push(inputArray[i]);
      }
    }
    return numberArray;
    
  }else{
    return "This is not an array."
  }
  
}
const my = [1, 3, 'sdfsadf', 'fsdfsdf', 5, 5, 'sdsf', 'sdfs', 67];
console.log(deleteInvalids(my));