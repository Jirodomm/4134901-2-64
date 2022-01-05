let person = {
    firstName : "Aomsin",
    lastName : "Jirodom",
    age : "22",
    sex : "male",

    fullName : function(){
        return this.firstName + "" + this.lastName;
    },
};

console.log(person);

person.age = 20;
console.log(person);

const p = person;
p.age = 10;
console.log(p);
console.log(person.age);//value
console.log(person.fullName);//property
console.log(person.fullName());//return

//destructuring
const {firstName,lastName,age: a,sex: s} = person;
console.log(firstName);
console.log(s);

const {} = person;
console.log(firstName);

//string
const S1 = "Hello World !!";
const S2 = "My Name is";
const S3 = "Aomsin";
const conCat = S1 + S2 + S3;
console.log(conCat);
//`
conCat1 =`  I 
            love 
            it. ${S2} ${S3}
            `;
console.log(conCat1);
//Spred Op
const A1 = [2, 3, 4];
const A2 = [5, 6, 7];
let comArr = [A1, A2];
console.log(comArr);
comArr = [...A1, ...A2];
console.log(comArr);

sum = (...numbers) => {
    let total = "";
    for ( value of numbers) total += value;
    return total;
};
console.log(sum(comArr));