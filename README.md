#aassert

is a library for defensive programming through javascript ducktype checking. The idea is to check the  strictly minimum requirements of a given value.
__THIS IS A WORK IN PROGRESS__
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

__To throw an exception if the value is not of the required type__ call `AA.n(value)` and an `AAssertionNotMetException` with the type required and the actual type. TODO: provide better tracing of the origin of the error.

All calls to AA are chaineable, so you can perform `AA.n(myNumber).s(myString)...`, this is particulary useful when dealing with parameters.

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

Of course you can reuse type definitions in toher types:

	aa.define( "petOwner", {
		pet: "dog",
		name: "string",
		phone: "number"
	});

And, as expected if pet is not a complying dog `aa.petOwner(petOwner)` will return false and `AA.petOwner(petOwner)` will throw the usual exception.

Or create nested types:

	class: {
		teacher: {
			id: "number",
			name: "string"
		}
		id: "number"
	}

You can also keep the type definitions in a JSON file, and import them as follows:

	aa.import(filePath);

###Ad-hoc types
If there's a type that will only be used once, maybe defining a global type can be too much. For those cases the `aa.c(object, typeDescriptor)` and `AA.c(object, typeDescriptor)` methods are available. For example:

 	aa.c( {name: "name", nested: {name: "nested_name", superNested: {age:3}}}, {name:"string", nested:{name:"string", superNested: {age: "number"}}})

###Circular dependencies
aassert will allow circular dependencies as they are needed to support HATEOAS objects. Say for example:

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

are valid type definitions that won't fail.
##Work to be done
- Import type definitions from json file.
- Reverse the definition order: create `aa` methods from the `AA` ones, so the error information is not discarded.
- Allow circular dependencies. It should work like this:


	class:{
		teacher: "teacher",
		id: "number"
	}
	teacher: {
		id: "number",
		name: "string"
	}
