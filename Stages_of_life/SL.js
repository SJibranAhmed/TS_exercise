// program for stages of a man
var person_age = 32;
if (person_age < 2) {
    console.log(person_age + " years old person is a \"baby\"");
}
else if (person_age >= 2 && person_age < 4) {
    console.log(person_age + " years old person is a \"toddler\"");
}
else if (person_age >= 4 && person_age < 13) {
    console.log(person_age + " years old person is a \"kid\"");
}
else if (person_age >= 14 && person_age < 20) {
    console.log(person_age + " years old person is a \"teenager\"");
}
else if (person_age >= 20 && person_age < 65) {
    console.log(person_age + " years old person is a \"Adult\"");
}
else if (person_age >= 65) {
    console.log(person_age + " years old person is a \"Elder\"");
}
else {
    console.log('Please enter right age here..');
}
