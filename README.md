#aassert

is a library for defensive programming through javascript ducktype checking. The idea is to check the  strictly minimum requirements of a given value.

##Installation
##Usage

###Primitives (Out of the box types)
The primitive types supported by aassert are: **number, boolean, string, array, object, function, undefined and null**

These primitives have the following shorthand names:

	number: n
	boolean: b
	string: s
	array: a
	object: o
	function: f
	undefined: u

To check if a value `value` is a of type number just call `aa.number(value)` if you are on the keystroke saving trend just call `aa.n(value)`. It will return the boolean value.

To throw an excpetion if the value is not of the required type call `AA.n(value)` and an `AAssertionNotMetException` with the type required and the acutal type. TODO: provide better tracing of the origin of the error.

##Custom types

To define your own types using the primitives as building blocks simply use de `aa.define` passing a JSON object like this:

	aa.define( "dog", {
		breed: "string",
		age: "number",
		name: "string",
		tricks: "array"
	});

from there you can simply:
`aa.dog(myDog)` or `AA.dog(myDog)``.

Of course you can nest type definitions:

	aa.define( "petOwner", {
		pet: "dog",
		name: "string",
		phone: "number"
	});

And, as expected if pet is not a complying dog `aa.petOwner(petOwner)` will return false and `AA.petOwner(petOwner)` will throw the usual exception.

You can also keep the type definitions in a JSON file, and import them as follows:

	aa.import(filePath);

###Circular dependencies
aassert allows circular dependencies. Say for example:

	dog: {
		...
		owner: "petOwner"
		...
	}
and

	petOwner:{
		...
		pet: "dog"
		...
	}

are valid type definitions that work as you'd expect.
