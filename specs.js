describe("global definitions", function(){
	it("aa should be defined", function(){
		expect(aa).not.toBeUndefined();
	})
	it("aa.a, aa.b, aa.A should be defined", function(){
		expect(aa.A).not.toBeUndefined();
		expect(aa.B).not.toBeUndefined();
		expect(aa.E).not.toBeUndefined();
	})
})

describe("primitive", function(){

describe("aa.A.number", function(){
	it("should be defined", function(){
		expect(aa.A.number).not.toBeUndefined();
	})
	it("should not return undefined if a string is passed", function(){
		expect(aa.A.number("lol")).not.toBeUndefined();
	})
	it("should return a string containing 'is not a number' if undefined is passed", function(){
		expect(aa.A.number(undefined)).toContain('is not a number');
	})
	it("should return a string containing 'is not a number' if NaN", function(){
		expect(aa.A.number(NaN)).toContain('is not a number');
	})
	it("should return undefined if an integer is passed", function(){
		expect(aa.A.number(4)).toBeUndefined();
	})
	it("should return undefined if a float is passed", function(){
		expect(aa.A.number(4.3)).toBeUndefined();
	})
	it("should allow n as a shorthand", function(){
		expect(aa.A.n).toBe(aa.A.number);
	})
})

describe("aa.A.boolean", function(){
	it("should be defined", function(){
		expect(aa.A.boolean).not.toBeUndefined();
	})
	it("should return false if a string is passed", function(){
		expect(aa.A.boolean("lol")).toContain('is not a boolean');
	})
	it("should return false if 0 is passed", function(){
		expect(aa.A.boolean(0)).toContain('is not a boolean');
	})
	it("should return true if false is passed", function(){
		expect(aa.A.boolean(false)).toBeUndefined();
	})
	it("should return true if true is passed", function(){
		expect(aa.A.boolean(true)).toBeUndefined();
	})
	it("should allow b as a shorthand", function(){
		expect(aa.A.boolean).toBe(aa.A.b);
	})
})

describe("aa.A.string", function(){
	it("should be defined", function(){
		expect(aa.A.string).not.toBeUndefined();
	})
	it("should return false if a number is passed", function(){
		expect(aa.A.string(4)).toContain('is not a string');
	})
	it("should return true if a string is passed", function(){
		expect(aa.A.string("lol")).toBeUndefined();
	})
	it("should return true if an empty string is passed", function(){
		expect(aa.A.string("")).toBeUndefined();
	})
	it("should allow aa.A.s as a shorthand", function(){
		expect(aa.A.string).toBe(aa.A.s);
	})
})

describe("aa.A.array", function(){
	it("should be defined", function(){
		expect(aa.A.array).not.toBeUndefined();
	})
	it("should return false if a string is passed", function(){
		expect(aa.A.array("lol")).toContain('is not an array');
	})
	it("should return true if an array is passed", function(){
		expect(aa.A.array([1,2,3])).toBeUndefined();
	})
	it("should return true if an empty array is passed", function(){
		expect(aa.A.array([])).toBeUndefined();
	})
	it("should allow aa.A.a as a shorthand", function(){
		expect(aa.A.array).toBe(aa.A.a);
	})
})

describe("aa.A.object", function(){
	it("should be defined", function(){
		expect(aa.A.object).not.toBeUndefined();
	})
	it("should return false if 4 is passed", function(){
		expect(aa.A.object(4)).toContain('is not an object');
	})
	it("should return true if an empty object is passed", function(){
		expect(aa.A.object({})).toBeUndefined();
	})
	it("should return true if an object is passed", function(){
		expect(aa.A.object({a:2})).toBeUndefined();
	})
	it("should return true if an array is passed", function(){
		expect(aa.A.object([])).toBeUndefined();
	})
	if("should return false if null is passed", function(){
		expect(aa.A.object(null)).toContain('is not an object');
	})
	if("should return false if undefined is passed", function(){
		expect(aa.A.object(undefined)).toContain('is not an object');
	})
	it("should allow aa.A.o as a shorthand", function(){
		expect(aa.A.object).toBe(aa.A.o);
	})
})

describe("aa.A.function", function(){
	it("should be defined", function(){
		expect(aa.A.function).not.toBeUndefined();
	})
	it("should return false if 4 is passed", function(){
		expect(aa.A.function(4)).toContain("is not a function");
	})
	it("should return false if an object is passed", function(){
		expect(aa.A.function({})).toContain("is not a function");
	})
	it("should return true if an empty function is passed", function(){
		expect(aa.A.function(function(){})).toBeUndefined();
	})
	it("should allow aa.A.f as a shorthand", function(){
		expect(aa.A.function).toBe(aa.A.f);
	})
})

describe("aa.A.undefined", function(){
	it("should be defined", function(){
		expect(aa.A.undefined).not.toBeUndefined();
	})
	it("should return false if a number is passed", function(){
		expect(aa.A.undefined(4)).toContain("is not undefined");
	})
	it("should return true if null is passed", function(){
		expect(aa.A.undefined(null)).toBeUndefined();
	})
	it("should return true if undefined is passed", function(){
		expect(aa.A.undefined(null)).toBeUndefined();
	})
	it("should allow aa.A.u as a shorthand", function(){
		expect(aa.A.undefined).toBe(aa.A.u);
	})
})
});

describe("aa.B primitives should be defined", function(){
	it("aa.B.boolean and aa.B.b should exist and be the same", function(){
		expect(aa.B.boolean).not.toBeUndefined();
		expect(aa.B.boolean).toBe(aa.B.b);
	})
	it("aa.B.number and aa.B.n should exist and be the same", function(){
		expect(aa.B.number).not.toBeUndefined();
		expect(aa.B.number).toBe(aa.B.n);
	})
	it("aa.B.string and aa.B.s should exist and be the same", function(){
		expect(aa.B.string).not.toBeUndefined();
		expect(aa.B.string).toBe(aa.B.s);
	})
	it("aa.B.array and aa.B.a should exist and be the same", function(){
		expect(aa.B.array).not.toBeUndefined();
		expect(aa.B.array).toBe(aa.B.a);
	})
	it("aa.B.object and aa.B.o should exist and be the same", function(){
		expect(aa.B.object).not.toBeUndefined();
		expect(aa.B.object).toBe(aa.B.o);
	})
	it("aa.B.function and aa.B.f should exist and be the same", function(){
		expect(aa.B.function).not.toBeUndefined();
		expect(aa.B.function).toBe(aa.B.f);
	})
	it("aa.B.undefined and aa.B.u should exist and be the same", function(){
		expect(aa.B.undefined).not.toBeUndefined();
		expect(aa.B.undefined).toBe(aa.B.u);
	})
});

describe("aa.E primitives should be defined", function(){
	it("aa.E.boolean and aa.E.b should exist and be the same", function(){
		expect(aa.E.boolean).not.toBeUndefined();
		expect(aa.E.boolean).toBe(aa.E.b);
	})
	it("aa.E.number and aa.E.n should exist and be the same", function(){
		expect(aa.E.number).not.toBeUndefined();
		expect(aa.E.number).toBe(aa.E.n);
	})
	it("aa.E.string and aa.E.s should exist and be the same", function(){
		expect(aa.E.string).not.toBeUndefined();
		expect(aa.E.string).toBe(aa.E.s);
	})
	it("aa.E.array and aa.E.a should exist and be the same", function(){
		expect(aa.E.array).not.toBeUndefined();
		expect(aa.E.array).toBe(aa.E.a);
	})
	it("aa.E.object and aa.E.o should exist and be the same", function(){
		expect(aa.E.object).not.toBeUndefined();
		expect(aa.E.object).toBe(aa.E.o);
	})
	it("aa.E.function and aa.E.f should exist and be the same", function(){
		expect(aa.E.function).not.toBeUndefined();
		expect(aa.E.function).toBe(aa.E.f);
	})
	it("aa.E.undefined and aa.E.u should exist and be the same", function(){
		expect(aa.E.undefined).not.toBeUndefined();
		expect(aa.E.undefined).toBe(aa.E.u);
	})
})


describe("aa.E should", function(){
	it("throw an error on aa.E.n", function(){
		expect(function(){aa.E.n("l")}).toThrow();
	})
	it("throw an error on aa.E.s", function(){
		expect(function(){aa.E.s(1)}).toThrow();
	})
	it("throw an error on aa.E.b", function(){
		expect(function(){aa.E.b("l")}).toThrow();
	})
	it("throw an error on aa.E.a", function(){
		expect(function(){aa.E.a("l")}).toThrow();
	})
	it("throw an error on aa.E.o", function(){
		expect(function(){aa.E.o("l")}).toThrow();
	})
	it("throw an error on aa.E.f", function(){
		expect(function(){aa.E.f("l")}).toThrow();
	})
	it("throw an error on aa.E.u", function(){
		expect(function(){aa.E.u("l")}).toThrow();
	})
	it("should allow nested calls", function(){
		expect(aa.E.b(true)).toBe(aa.E);
	})
})

describe("custom type definitions (aa.define)", function(){
	it("should throw an error when an empty type description is passed", function(){
		var fail = function(){
			aa.define("foo", {});
		}
		expect(fail).toThrow();
	})
	describe("single property descriptors", function(){
		beforeEach(function(){
			aa.define("foo", {id:"string"});
		});
		it("should create the .A .B and .E method", function(){
			expect(aa.B.foo).not.toBeUndefined();
			expect(aa.E.foo).not.toBeUndefined();
			expect(aa.A.foo).not.toBeUndefined();
		})
		it("should work when the condition is met", function(){
			expect(aa.B.foo({id:"lol"})).toBe(true);
		})
		it("should fail with an empty object", function(){
			expect(aa.B.foo({})).toBe(false);
		})
		it("should fail when type mismatch", function(){
			expect(aa.B.foo({id:2})).toBe(false);
		})
		it("should throw an error when using strict version", function(){
			expect(function(){aa.E.foo({id:2})}).toThrow();
		})
		it("should allow chaining when using strict version", function(){
			expect(function(){aa.E.s("l").foo({id:"lol"}).n(3)}).not.toThrow();
		})
	});

	describe("multiple property descriptors", function(){
		beforeEach(function(){
			aa.define("foo", {id:"string", data: "object"});
		});
		it("should work when the condition is met", function(){
			expect(aa.B.foo({id:"lol", data: {}})).toBe(true);
		})
		it("should not work when the condition is not met by type mismatch", function(){
			expect(aa.B.foo({id:"lol", data: 3})).toBe(false);
		})
		it("should not work when the condition is not met by missing key", function(){
			expect(aa.B.foo({ids:"lol", data: {}})).toBe(false);
		})
	})

	xdescribe("circular dependencies", function(){
		beforeEach(function(){

			aa.define("pet", {owner:"petOwner", name: "string"});
			aa.define("petOwner", {pet:"pet", name: "string"});
		});
		it("should work when the condition is met", function(){
			var pet = {name: "petName"};
			var owner = {name: "petOwner", pet: pet};
			pet.owner = owner;
			expect(aa.pet(pet)).toBe(true);
		})
	})

	describe("ad hoc types", function(){
		it("should fail if the condition is not met", function(){
			expect(aa.B.c({name: "name", age: "lol"}, {name: "string", age: "number"})).toBe(false);
		})
		it("should succed if the condition is met", function(){
			expect(aa.B.c({name: "name", age: 4}, {name: "string", age: "number"})).toBe(true);
		})
		it("should work with defined nested objects", function(){
			expect(aa.B.c({name: "name", nested: {name: "nested_name"}},{name:"string", nested:{name:"string"}})).toBe(true);
		})
		it("should work with deep nested objects", function(){
			expect(aa.B.c({name: "name",
			nested: {name: "nested_name",
			superNested: {age:3}}},
			{name:"string",
			nested:{name:"string",
			superNested: {age: "number"}}})).toBe(true);
		})
		it("should fail with deep nested objects if theres a type mismatch", function(){
			expect(aa.B.c({name: "name",
			nested: {name: "nested_name",
			superNested: {age:[3]}}},
			{name:"string",
			nested:{name:"string",
			superNested: {age: "number"}}})).toBe(false);
		})
		it("should work with generic nested objects", function(){
			expect(aa.B.c({name: "name", nested: {name: "nested_name"}},{name:"string", nested:"object"})).toBe(true);
		})
		it("should fail if the nested object type mismatches", function(){
			expect(aa.B.c({name: "name", nested: {age: "nested_name"}},{name:"string", nested:{age:"number"}})).toBe(false);
		})
		it("should work the strict version", function(){
			expect(function(){aa.E.c({name: "name"},{name:"string"})}).not.toThrow();
		})
		it("should throw an exception when the strict version is used and theres a type mismatch", function(){
			expect(function(){aa.E.c({name: 12},{name:"string"})}).toThrow();
		})
	})

	describe("it should be able to import json files", function(){
		beforeEach(function(done){
			aa.import("/base/dummy.json", function(){done()});
		})
		it("should not throw an exception when there's no callback", function(){
			expect(function(){aa.import("/base/dummy.json")}).not.toThrow();
		})
		it("should create the types in the json file passed as a param", function(){
			expect(aa.A.human).not.toBeUndefined();
			expect(aa.A.car).not.toBeUndefined();
			expect(aa.A.pet).not.toBeUndefined();
			expect(aa.A.iceKing).not.toBeUndefined();
		})
		describe("validate correctly its types", function(){
			it("with trivial data types", function(){
				expect(aa.B.iceKing({isLame:true})).toBe(true);
				expect(aa.B.iceKing({isLame:3})).toBe(false);
			})
			it("with nested types", function(){
				expect(aa.B.pet({type: "dog", name: "otis", breed: "chanda", tricks: ["muerto"],
					owner:{name:"pacho", id:3, nationality:"colombian", belongings: [1,2,3]}})).toBe(true);
			})
			it("with should fail when theres a nested type mismatch", function(){
				expect(aa.B.pet({type: "dog", name: "otis", breed: "chanda", tricks: ["muerto"],
					owner:{name:10, id:3, nationality:"colombian", belongings: [1,2,3]}})).toBe(false);
			})
		})
	})
})

describe("aa.__createStrictVersion method returns a function that", function(){
	var trivialUndefined, trivialEmptyObject, object;
	beforeEach(function(){
		trivialUndefined = function(){
			return undefined;
		}
		trivialEmptyObject = function(){
			return {};
		}
		object = function(){
			return {'key':'error'};
		}
	})
	xit("throws an error when the passed function returns a non empty object", function(){
		expect(aa.__createStrictVersion(object)).toThrow();
	})
})
