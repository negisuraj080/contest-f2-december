const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let developers = data.filter(arr => arr.profession === 'developer');
    console.log(developers);
    developers.forEach(dev => console.log(`Name: ${dev.name}, Age: ${dev.age}, Profession: ${dev.profession}`));
  }
  
  // 2. Add Data
  function addData() {
    let personName = prompt("enter name");
    let personAge = prompt("enter age");
    let personProf = prompt("enter profession");
    if(!personName || isNaN(personAge) || !personProf ){
      console.log('Enter valid Data!');
    }else{
      let person = {
        name: personName,
        age: Number(personAge),
        profession: personProf, 
      }
      data.push(person);
      console.log(data);
    }
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let admins = data.filter(arr => arr.profession !== 'admin');
    console.log(admins)
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray = [
      { name: "alice", age: 30, profession: "designer" },
      { name: "bob", age: 22, profession: "analyst" },
    ];
  
    let resultArray = data.concat(dummyArray);
  
    console.log(resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    if (data.length === 0) {
      console.log("Cannot calculate average age. The array is empty.");
      return;
    }
  
    let totalAge = data.reduce((sum, person) => sum + person.age, 0);
  
    let average = totalAge / data.length;
  
    console.log(`Average Age: ${average.toFixed(2)}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.filter(person => person.age > 25 );

  if (isAbove25) {
    console.log(`There is at least one person above 25 years old.`);
  } else {
    console.log("There is no person above 25 years old.");
  }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    
  const uniqueProfessionsArray = [];

  for (const person of data) {
    
    if (!uniqueProfessionsArray.includes(person.profession)) {
      
      uniqueProfessionsArray.push(person.profession);
    }
  }
  console.log("Distinct Professions:", uniqueProfessionsArray);
}

  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((person1, person2) => person1.age - person2.age);
    console.log("Sorted by Age:", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const johnIndex = data.findIndex(person => person.name === "john");

  // Update John's profession to 'manager' if found
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
    console.log("John's profession has been updated to 'manager'.", data);
  } else {
    console.log("John not found in the array.");
  }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const uniqueProfessionsArray = [];
    for (const person of data) {
      if (!uniqueProfessionsArray.includes(person.profession)) {
        uniqueProfessionsArray.push(person.profession);
      }
    }

    for(let prof of uniqueProfessionsArray){
      let count = 0;
      for(let person of data){
        if(prof == person.profession){count++;}
      }
      console.log(prof, count);
    }
  }



