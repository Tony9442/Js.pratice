/*let colleagues = ['chidera', 'Damalie', 'Kofi', 'Mia', 'Prince']
for (let i = 0; i < colleagues.length; i++) {
    console.log(colleagues[i]);
}


let group = 10;
let gender = 2;
let ghana = 16;

if (group < 20) {
  console.log('that\'s correct');
} else if (gender > 2) {
  console.log('not correct');
} else {
  console.log('Accra is my city');
}*/

const study = ['Eli','Ama','Kwawu','Abu'];

for (let i = 0; i < study.length; i++) {
  console.log(study[i]);
}

let a = 50;

if (a==50) {
  console.log('true');
} else {

  console.log('not true');
}

 function hello ()
  // frist the function,the name the perentecrs
 {
    // the block of console
  console.log('Dino jump');
}
 hello ();
//  calling the function.


function addlist (item1,item2,item3) {
let totalprice=item1 + item2 + item3
  console.log(totalprice);
}

addlist(7,30,50)

function addprice (items1,items2){
  let total = items1 + items2
  return total
}

function tax (totalprice,taxpercantage){
  let tax = totalprice * taxpercantage
  return tax
}

let total = addprice(10,10) + tax (addprice(10,10),0.5);
console.log(total);

// alert('connection poor');

// let name = prompt('What is your name')
// console.log(name);

let result = confirm ('hello');
console.log(result);


// other way to create a function and its called an arrow funtion
const jump =()=> {
  console.log('jump high')
}
jump();









