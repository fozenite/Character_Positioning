

// NOT JUST COUNT
// RETURN INDICES NOW


function characterPositioning(inputString) {

// REMOVE EMPTY SPACES
  var myString = inputString;
  var myObject = {};

  for(i in myString){
// CHECK IF UNDEFINED AS OF YET AND ADD DEFAULT
  if(myString[i] !== " ") {
    if(!myObject[myString[i]]){
       myObject[myString[i]] = [i];
    } else {
      myObject[myString[i]].push(i);
      }
    }
  }

  return myObject;
}


// Setting up test cases
console.log(characterPositioning("Lighthouse in the house"));

