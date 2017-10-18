// Code your solutions in this file

function printBadges(names){

  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}


function tailsNeverFails(){
  let tails;
  let counter = 0

  while (tails){
    tails = Math.random() <= 0.5;
    ++counter;
  }

  console.log(`You got ${counter} tails in a row!`)

}
