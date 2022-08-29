function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400) {
      result = 'This one is on me!';
  } if (someValue > 400 && someValue <= 2000) {
      result = 'That will be twenty bucks.';
  } if (someValue > 2000 && someValue <= 2500) {
      result = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
      result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(someCity){
  return someCity === 'NYC' ? "Ok, sounds good." : "No go.";
}



function switchOnCharmFromTip(someTip){
  const tip = 'someTip';
  switch (someTip) {
      case 'generous':
          return ("Thank you so much.");
      case 'not as generous':
          return ("Thank you.");
      default:
          return("Bye.");
}
}