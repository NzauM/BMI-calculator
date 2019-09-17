var divide = function(weight, height2) {
  return weight / height2;
};

var weight = parseInt(prompt("Enter your weight"));
var height1 = parseInt(prompt("Enter your height"));
var height2 = Math.pow(height1, 2);
var BMI = divide(weight, height2);
alert("Your BMi is " + BMI);
