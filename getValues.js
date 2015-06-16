var variable = {
	name: "Rob",
	age: 101,
	gender: "male"
}
function getValues(argument) {
	var array = [];
	if (argument instanceof Array || argument instanceof Function || typeof argument === "string" || typeof argument === "number") {
		return "Please only use an Object as an argument";
	} else if (typeof argument === "object") {
		for (var event in argument) {
			array.push(argument[event]);
		}
		return array;
	}
}
getValues(variable);