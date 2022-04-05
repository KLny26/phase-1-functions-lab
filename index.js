
function distanceFromHqInBlocks(ScuBlock){
 if (ScuBlock > 42){
   return(ScuBlock - 42)
 } else if (ScuBlock < 42)
   return(42 - ScuBlock)
}
function distanceFromHqInFeet(Scufeet){
 if (Scufeet > 42){
  return (Scufeet - 42) * 264
 } else if (Scufeet < 42);
   return (42 - Scufeet) * 264
}
function distanceTravelledInFeet(feetTravel, disTravel){
 if (feetTravel > disTravel){
   return (feetTravel - disTravel) * 264
 } else if (feetTravel < disTravel)
   return (disTravel - feetTravel) * 264
}
function calculatesFarePrice(start, destination){
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400){
console.log("give customers a free sample")
    return 0;

  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 0.02 * (distanceInFeet - 400);
  
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  
  } else {
    return "cannot travel that far";
  }
}
