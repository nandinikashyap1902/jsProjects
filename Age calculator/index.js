const dateOfBirth = document.getElementById("date")
const Year = new Date();
const currentYear = Year.getFullYear();
function calculateAge(){
const SelectedYear = new Date(dateOfBirth.value) // for extracting year from selected year
const PersonYear=SelectedYear.getFullYear();
if(PersonYear>currentYear){
  alert("pls select age between current year")
}
else{
  const currentAge = currentYear-PersonYear;
   console.log(currentAge);
   const Age = document.getElementById("age");
   Age.innerText = currentAge;
}
}