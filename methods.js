//Lecture: Closures

function retirement(retirementAge){
	var a = " years left until retirement";
	return function(yearOfBirth){
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1988);

var retirementIceland = retirement(67);
retirementIceland(1974);

//retirement(65)(1990);

function interviewQuestion(job){
	return function(name){
		if(job === "designer"){
			console.log(name + ", can you please explain what UX design is?");
		}
		else if(job === "teacher"){
			console.log("What subject do you teach? " + name)
		}
		else {
			console.log("Hello " + name + " what do you do?")
		}
	}
}

interviewQuestion("designer")("Sukhveer");

//////////////////////////////////////////////////Lecture: Bind, Call and Apply

var john = {
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function(style, timeOfDay){
		if (style === "formal"){
			console.log("Good " + timeOfDay + " Ladies and Gentleman. I'm " + this.name + ", I am a " + this.job + " and I am " + this.age + " years' old");
		} else if (style === "friendly"){
			console.log("Hey! What's up? I'm " + this.name + ", I am a " + this.job + " and I am " + this.age + " years' old. Have a nice " + timeOfDay + ".");
		}
	}
};

var emily = {
	name: "Emily",
	age: "35",
	job: "designer"
};

john.presentation("formal", "Morning");

//This is known as method borrowing, borrowing the john presentation to use with Emily, buy using the call method
john.presentation.call(emily, "friendly", "afternoon");

//With the Apply method you input the parameters into an array, only difference
john.presentation.apply(emily, ["friendly", "afternoon"]);


// Bind method
var johnFriendly = john.presentation.bind(john, "friendly");

//can call the other parameter after
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");


// years example

var years = [1990, 1965, 2002, 1943, 2000];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);