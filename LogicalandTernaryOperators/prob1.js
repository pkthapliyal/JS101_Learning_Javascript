// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var yearOfBirth = 1995 ;
var currentYear = 2022 ;
age = currentYear- yearOfBirth ;

if((age >= 13) && (age<= 19)) {
  console.log("Teenage")
}
else if((age>=20)&& (age<=29)){
  console.log("Twenties");
}
