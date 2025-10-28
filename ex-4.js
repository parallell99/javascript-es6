let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
let newStudentProfile ={...studentProfile,hobbies :[...studentProfile.hobbies,...additionalHobbies]}
// let newStudentProfile = {...studentProfile,...studentProfile.hobbies.push(...additionalHobbies)}
console.log(newStudentProfile);
