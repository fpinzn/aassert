#aassert

__V: 0.2.3__

is a library for defensive programming through javascript ducktype checking. The idea is to check the strictly minimum requirements for a set of values. It can be used as:

* `aa.A`: a comprenhesive validator (return an object whose keys are the invalid values, and their value the name of the error). When used in primitive values it will return `undefined` if there is no error.
* `aa.B`: a __boolean__ compliance checker (return true if the conditions are met and false otherwise). This is simply a convenience wraper for `aa.a`.
* `aa.E`: as _a super strict type asserter_ which will throw a type error if the conditions aren't met. This method allows chaining.

##Examples

```js
var chef = {'name': 'Francisco', 'age': 25}

aa.E({'name':'string', 'age': 'number'}) // returns true
aa.E({'name':'string', 'age': 'string'}) // returns false

```

##Installation

	bower install aassert

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

To check if a value `value` is a of type number just call `aa.B.number(value)` if you are on the keystroke saving hype just call `aa.B.n(value)`. It will return the boolean value false if there value is not valid.

All calls to aa.E are chainable, so you can perform `aa.E.n(myNumber).s(myString)...`, this is particularly useful when dealing with a parameter list.

##Design choices

* `NanN` is not a number, even though `typeof(NaN)` returns `number`.
* `null` is not an object, even though `typeof(null)` returns `object`.
* `null` is considered undefined.
* An array is an object and an array.

##Custom types

To define your own types using the primitives as building blocks simply use de `aa.define` passing a JSON object like this:

```js
	aa.define( "dog", {
		breed: "string",
		age: "number",
		name: "string",
		tricks: "array"
	});
```

from there you can simply do:
`aa.A.dog(myDog)`, `aa.B.dog(myDog)` and `aa.E.dog(myDog)`. All three methods are created on the run.

Of course you can reuse type definitions in other types:

```js
	aa.define( "petOwner", {
		pet: "dog",
		name: "string",
		phone: "number"
	})
```

And, as expected if pet is not a complying dog `aa.B.petOwner(petOwner)` will return false and `aa.E.petOwner(petOwner)` will throw a type exception.

Or create nested types:

```js
	class: {
		teacher: {
			id: "number",
			name: "string"
		}
		id: "number"
	}
```

You can also keep the type definitions in a JSON file, and import them as follows:

```js
	aa.import(filePath, callback);
```

###Ad-hoc types
If there's a type that will only be used once, maybe defining a global type is way too much. For those cases the `aa.A.c(object, typeDescriptor)`, `aa.B.c(object, typeDescriptor)` and `aa.E.c(object, typeDescriptor)` methods are available. For example:

```js
 	aa.B.c({name: "name",
		nested: {name: "nested_name",
			superNested: {age:3}}},

		{name:"string",
		nested:{name:"string",
		superNested: {age: "number"}}})

		//will return true.
```

###Circular dependencies(Not yet implemented)
aassert will allow circular dependencies. Say for example:

```js
dog: {
	...
	owner: "petOwner"
	...
}
```
and
```js
petOwner:{
	...
	pet: "dog"
	...
}
```

are valid type definitions that won't fail.

##Work to be done


- Allow circular dependencies. It should work like this:

```js
class:{
	teacher: "teacher",
	id: "number"
}
teacher: {
	id: "number",
	name: "string"
}
```
##Changelog

__0.2.0:__

* Moved inside `aa` the calls so only one object is exposed to global namespace.
* The old aa calls are now boolean calls that are accessible as `aa.B.`
* The new new assertion mode __aa.A.__ will return a detailed description of the type mismatches if any.
* The old strict calls `AA.` are now `aa.E.` calls, as they throw an __E__xception.
