// Description:
// Given a time in a time format class, return it without year, month and day.

// It should return a string including milliseconds with 3 decimals.

// Example:

// new Date(2016, 2, 8, 16, 42, 59)
// //Should return:
// "16:42:59,000"
function convert(time) {
  //Your code here!
  let hour = time.getHours().toString().padStart(2, "0"); //get hour for return the hour in string format and with a 2 pod
  let minute = time.getMinutes().toString().padStart(2, "0"); //get minute for return the hour in string format and with a 2 pod
  let second = time.getSeconds().toString().padStart(2, "0"); //get seconds for return the hour in string format and with a 2 pod
  let millesecond = time.getMilliseconds().toString().padStart(3, "0"); //get millisecond for return the hour in string format and with a 2 pod
  return `${hour}:${minute}:${second},${millesecond}`;
}
