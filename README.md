#aassert

is a library for defensive programming through javascript ducktype checking. The idea is to check the  strictly minimum requirements for a value. It can be used as a boolean compliance checker (return true if the conditions are met and false otherwise) or in a more strict fashion throwing a type error if the conditions aren't met. The strict way allows chaining.

__THIS IS A WORK IN PROGRESS__
##Installation
##Usage

###Primitives (Out of the box types)
The primitive types supported by aassert are: `number`, `boolean`, `string`, `array`, `object`, `function` and `undefined`. **null is treated as undefined**

These primitives have the following shorthand names:

	number: n
	boolean: b
	string: s
	array: a
	object: o
	function: f
	undefined: u

To check if a value `value` is a of type number just call `aa.number(value)` if you are on the keystroke saving trend just call `aa.n(value)`. It will return the boolean value.

__The strict calls `AA...` will throw an exception if the value is not of the required type__ call `AA.n(value)` and an `AAssertionNotMetException`. Another way that provides better error tracing is using an ad-hoc type.

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

Of course you can reuse type definitions in other types:

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

	aa.import(filePath, callback);

###Ad-hoc types
If there's a type that will only be used once, maybe defining a global type is way too much. For those cases the `aa.c(object, typeDescriptor)` and `AA.c(object, typeDescriptor)` methods are available. For example:

 	aa.c({name: "name",
		nested: {name: "nested_name",
			superNested: {age:3}}},

		{name:"string",
		nested:{name:"string",
		superNested: {age: "number"}}})

will return `true`.
###Circular dependencies(Not yet implemented)
aassert will allow circular dependencies. Say for example:

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
