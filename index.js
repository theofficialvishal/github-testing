const age = 24;
const name2 ='Piyush Garg'
const salary = 50000

function isAbove18(age) {
  if(age >= 18){
    return 'Yes, you are above 18';
  } else {
    return 'No, you are not above 18';
  };
}

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}