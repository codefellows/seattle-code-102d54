let person = "kassie";

function sayName(greeting) {
  let name = 'Jacob';
  
  document.write(greeting + name);
  return name;
}

// document.write(greeting + name);

// sayName('Hello');

function whatTimeIsIt(militaryTime, dayOfWeek) { // camel case naming

  console.log(typeof(dayOfWeek));

  if (militaryTime < 12) {
    document.write('It is ' + dayOfWeek + ' morning');
  } else if (militaryTime > 23) {
    document.write('That is not a valid time unit');
  } else {
    document.write('It is ' + dayOfWeek + ' in the afternoon /evening');
  }
}