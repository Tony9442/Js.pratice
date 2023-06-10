let person = {
  name: "Chidera",
  age: 31,
  email: "geanthony94@gmail.com",
  gender: "male",
  country: "Nigeria"
 };
console.log(person.name) ;
console.log(person.age);
console.log(person.email);
console.log(person.gender);
console.log(person.country)



// CLASS

class Human {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  
  talk() {
    return "speaks" + this.name

}
}
// console.log(talk);


class Man { 
  constructor(name) { 
    this.name = name; 
  } 
  talk() {
     console.log(this.name + ' makes a noise.'); 
  } 
}

class Boy extends Human { 
  speak() {
     console.log(this.name + ' speak'); 
  } 
}

let boy = new Boy('chi');
 boy.speak();

 