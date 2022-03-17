//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return Array.from(String(n), Number).reverse()
}
// in this excersie first the numbers needed to become arrays using the array from method, then transforming them into string and the number constructor as a second argument?? then reverse
console.log(digitize(34559))