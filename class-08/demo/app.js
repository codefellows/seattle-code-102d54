// for (let i = 0; i < 10; i++) {
//   console.log('i is equal to :', i);
//   // debugger;
// }

function askNumber() {

  let number = prompt('Give me a number between 1 and 10');
  while(!number) {
    number = prompt('No I really need a number!');
  }

  // Math.random() * 10; // returns a random number between 0 and 10 including tons of decimals.

  // how can I add an image to my document??
  for (let i = 0; i < number; i++) {
    document.write('<img style="width: 25px;" src="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*">');
  }
}

for (let i = 10; i > 0; i--) {
  if (i > 5) {
    console.log('Your i is large');
  }
  console.log('Current i value: ', i);
}