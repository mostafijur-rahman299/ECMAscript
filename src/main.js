////////////////////////////////////////////
//////////// var, let, const //////////////
///////////////////////////////////////////

// var 	---> 	function scope
// let 	---> 	block scope
// const 	----> 	block scope and read only



////////////////////////////////////////////
//////////////// objects //////////////////
///////////////////////////////////////////

var person2 = {
	name: 'sajib',
	college: function(name){
		console.log("Hi")
		return name + " college"
	},
	school(name){
		return name + " shcool"
	}
}



////////////////////////////////////////////
//////////// this keyword //////////////////
///////////////////////////////////////////

var person = {
	name: 'sk',
	college: function(){
		console.log(this.name) // the value of 'this' is determine how the function is called
	}
}

person.college() // 'this' is represent the person object

// var college = person.college // 'this' is represent the global window object
// console.log(college)
// college()
 
// set this value permanently using bind method
var college = person.college.bind(person2) // now 'this' is represent the person2 object
college()



////////////////////////////////////////////
//////////// Arrow function ///////////////
///////////////////////////////////////////

var square = function(number){
	return number * number ;
}
console.log(square(5));

var multiply = (number1, number2) => number1 * number2
console.log(multiply(3, 4))

var jobs = [
	{id: 1, isActive: true},
	{id: 2, isActive: true},
	{id: 3, isActive: false},
	{id: 4, isActive: true},
	{id: 5, isActive: false},
]

var activeJob = jobs.filter(function(job){return job.isActive})
console.log(activeJob)

var inActiveJob = jobs.filter((job) => !job.isActive)
console.log(inActiveJob)

var jobId = jobs.map((job) => job.id)
console.log(jobId)

// arrow function don't rebind 'this' keyword

// rebind 'this' keyword
var person = {
	name: 'sajib',
	talk(){
		setTimeout(function(){
			console.log(this)
		}, 1000)
	}
}
person.talk()

// don't rebind the this keyword
var person = {
	name: 'sajib',
	talk(){
		setTimeout(() => console.log(this), 1000)
	}
}
person.talk()



////////////////////////////////////////////
//////////// object destructuring /////////
///////////////////////////////////////////

const address = {
	street: 'isubpur',
	city: 'Naogoan',
	country: 'Bangladesh'
}

const { street } = address;
console.log(street)

const { street: st } = address;
console.log(st)



////////////////////////////////////////////
//////////// spread operator //////////////
///////////////////////////////////////////

var first = [1,2,3,4,5,6]
var second = [9,8,7,6,4]

var combined =  [...first, 'd', ...second]
console.log(combined)

var first = { name: "sajib" }
var second = { job: "software engineer" }

const c = {...first, ...second, location: "Bangladesh"}
console.log(c)



////////////////////////////////////////////
///////////////// classes /////////////////
///////////////////////////////////////////

class Student {
	constructor(name, country){
		this.name = name;
		this.country = country;
	}

	address(street, city){
		return {street: street, city: city, country: this.country}
	}
}


////////////////////////////////////////////
////////////// inheritance /////////////////
///////////////////////////////////////////

export class Teacher extends Student{
	constructor(name, country, degree){
		super(name, country);
		this.degree = degree;
	}

	subject(sub_name){
		return sub_name + " teacher"
	}
}



////////////////////////////////////////////
//////////////// modules ///////////////////
///////////////////////////////////////////

// this example is in the head-teacher.js file



console.log("hello earth")


