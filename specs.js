describe("global definitions", function(){
	it("aa should be defined", function(){
		expect(aa).not.toBeUndefined();
	})
	it("AA should be defined", function(){
		expect(AA).not.toBeUndefined();
	})
})

describe("primitive", function(){

describe("aa.number", function(){
	it("should be defined", function(){
		expect(aa.number).not.toBeUndefined();
	})
	it("should return false if a string is passed", function(){
		expect(aa.number("lol")).toEqual(false);
	})
	it("should return false if undefined is passed", function(){
		expect(aa.number(undefined)).toEqual(false);
	})
	it("should return false if NaN", function(){
		expect(aa.number(NaN)).toEqual(false);
	})
	it("should return true if an integer is passed", function(){
		expect(aa.number(4)).toEqual(true);
	})
	it("should return true if a float is passed", function(){
		expect(aa.number(4.3)).toEqual(true);
	})
	it("should allow n as a shorthand", function(){
		expect(aa.n).toBe(aa.number);
	})
})

describe("aa.boolean", function(){
	it("should be defined", function(){
		expect(aa.boolean).not.toBeUndefined();
	})
	it("should return false if a string is passed", function(){
		expect(aa.boolean("lol")).toBe(false);
	})
	it("should return false if 0 is passed", function(){
		expect(aa.boolean(0)).toBe(false);
	})
	it("should return true if false is passed", function(){
		expect(aa.boolean(false)).toBe(true);
	})
	it("should return true if true is passed", function(){
		expect(aa.boolean(true)).toBe(true);
	})
	it("should allow b as a shorthand", function(){
		expect(aa.boolean).toBe(aa.b);
	})
})

describe("aa.string", function(){
	it("should be defined", function(){
		expect(aa.string).not.toBeUndefined();
	})
	it("should return false if a number is passed", function(){
		expect(aa.string(4)).toBe(false);
	})
	it("should return true if a string is passed", function(){
		expect(aa.string("lol")).toBe(true);
	})
	it("should return true if an empty string is passed", function(){
		expect(aa.string("")).toBe(true);
	})
	it("should allow aa.s as a shorthand", function(){
		expect(aa.string).toBe(aa.s);
	})
})

describe("aa.array", function(){
	it("should be defined", function(){
		expect(aa.array).not.toBeUndefined();
	})
	it("should return false if a string is passed", function(){
		expect(aa.array("lol")).toBe(false);
	})
	it("should return true if an array is passed", function(){
		expect(aa.array([1,2,3])).toBe(true);
	})
	it("should return true if an empty array is passed", function(){
		expect(aa.array([])).toBe(true);
	})
	it("should allow aa.a as a shorthand", function(){
		expect(aa.array).toBe(aa.a);
	})
})

describe("aa.object", function(){
	it("should be defined", function(){
		expect(aa.object).not.toBeUndefined();
	})
	it("should return false if 4 is passed", function(){
		expect(aa.object(4)).toBe(false);
	})
	it("should return true if an empty object is passed", function(){
		expect(aa.object({})).toBe(true);
	})
	it("should return true if an object is passed", function(){
		expect(aa.object({a:2})).toBe(true);
	})
	it("should return true if an array is passed", function(){
		expect(aa.object([])).toBe(true);
	})
	if("should return false if null is passed", function(){
		expect(aa.object(null)).toBe(false);
	})
	if("should return false if undefined is passed", function(){
		expect(aa.object(undefined)).toBe(false);
	})
	it("should allow aa.o as a shorthand", function(){
		expect(aa.object).toBe(aa.o);
	})
})

describe("aa.function", function(){
	it("should be defined", function(){
		expect(aa.function).not.toBeUndefined();
	})
	it("should return false if 4 is passed", function(){
		expect(aa.function(4)).toBe(false);
	})
	it("should return false if an object is passed", function(){
		expect(aa.function({})).toBe(false);
	})
	it("should return true if an empty function is passed", function(){
		expect(aa.function(function(){})).toBe(true);
	})
	it("should allow aa.f as a shorthand", function(){
		expect(aa.function).toBe(aa.f);
	})
})

describe("aa.undefined", function(){
	it("should be defined", function(){
		expect(aa.undefined).not.toBeUndefined();
	})
	it("should return false if a number is passed", function(){
		expect(aa.undefined(4)).toBe(false);
	})
	it("should return true if null is passed", function(){
		expect(aa.undefined(null)).toBe(true);
	})
	it("should return true if undefined is passed", function(){
		expect(aa.undefined(null)).toBe(true);
	})
	it("should allow aa.u as a shorthand", function(){
		expect(aa.undefined).toBe(aa.u);
	})
})
});

describe("AA primitives should be defined", function(){
	it("AA.boolean and AA.b should exist and be the same", function(){
		expect(AA.boolean).not.toBeUndefined();
		expect(AA.boolean).toBe(AA.b);
	})
	it("AA.number and AA.n should exist and be the same", function(){
		expect(AA.number).not.toBeUndefined();
		expect(AA.number).toBe(AA.n);
	})
	it("AA.string and AA.s should exist and be the same", function(){
		expect(AA.string).not.toBeUndefined();
		expect(AA.string).toBe(AA.s);
	})
	it("AA.array and AA.a should exist and be the same", function(){
		expect(AA.array).not.toBeUndefined();
		expect(AA.array).toBe(AA.a);
	})
	it("AA.object and AA.o should exist and be the same", function(){
		expect(AA.object).not.toBeUndefined();
		expect(AA.object).toBe(AA.o);
	})
	it("AA.function and AA.f should exist and be the same", function(){
		expect(AA.function).not.toBeUndefined();
		expect(AA.function).toBe(AA.f);
	})
	it("AA.undefined and AA.u should exist and be the same", function(){
		expect(AA.undefined).not.toBeUndefined();
		expect(AA.undefined).toBe(AA.u);
	})
})
describe("AA should throw errors when aa returns false", function(){
	it("AA.n", function(){
		expect(function(){AA.n("l")}).toThrow();
	})
	it("AA.s", function(){
		expect(function(){AA.s(1)}).toThrow();
	})
	it("AA.b", function(){
		expect(function(){AA.b("l")}).toThrow();
	})
	it("AA.a", function(){
		expect(function(){AA.a("l")}).toThrow();
	})
	it("AA.o", function(){
		expect(function(){AA.o("l")}).toThrow();
	})
	it("AA.f", function(){
		expect(function(){AA.f("l")}).toThrow();
	})
	it("AA.u", function(){
		expect(function(){AA.u("l")}).toThrow();
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
		it("should create the verification method", function(){
			expect(aa.foo).not.toBeUndefined();
		})
		it("should create the strict verification method", function(){
			expect(AA.foo).not.toBeUndefined();
		})
		it("should work when the condition is met", function(){
			expect(aa.foo({id:"lol"})).toBe(true);
		})
		it("should fail with an empty object", function(){
			expect(aa.foo({})).toBe(false);
		})
		it("should fail when type mismatch", function(){
			expect(aa.foo({id:2})).toBe(false);
		})
		it("should throw an error when using strict version", function(){
			expect(function(){AA.foo({id:2})}).toThrow();
		})
		it("should allow chaining when using strict version", function(){
			expect(function(){AA.s("l").foo({id:"lol"}).n(3)}).not.toThrow();
		})
	});

	describe("multiple property descriptors", function(){
		beforeEach(function(){
			aa.define("foo", {id:"string", data: "object"});
		});
		it("should work when the condition is met", function(){
			expect(aa.foo({id:"lol", data: {}})).toBe(true);
		})
		it("should not work when the condition is not met by type mismatch", function(){
			expect(aa.foo({id:"lol", data: 3})).toBe(false);
		})
		it("should not work when the condition is not met by missing key", function(){
			expect(aa.foo({ids:"lol", data: {}})).toBe(false);
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
			expect(aa.c({name: "name", age: "lol"}, {name: "string", age: "number"})).toBe(false);
		})
		it("should succed if the condition is met", function(){
			expect(aa.c({name: "name", age: 4}, {name: "string", age: "number"})).toBe(true);
		})
		it("should work with defined nested objects", function(){
			expect(aa.c({name: "name", nested: {name: "nested_name"}},{name:"string", nested:{name:"string"}})).toBe(true);
		})
		it("should work with deep nested objects", function(){
			expect(aa.c({name: "name",
			nested: {name: "nested_name",
			superNested: {age:3}}},
			{name:"string",
			nested:{name:"string",
			superNested: {age: "number"}}})).toBe(true);
		})
		it("should fail with deep nested objects if theres a type mismatch", function(){
			expect(aa.c({name: "name",
			nested: {name: "nested_name",
			superNested: {age:[3]}}},
			{name:"string",
			nested:{name:"string",
			superNested: {age: "number"}}})).toBe(false);
		})
		it("should work with generic nested objects", function(){
			expect(aa.c({name: "name", nested: {name: "nested_name"}},{name:"string", nested:"object"})).toBe(true);
		})
		it("should fail if the nested object type mismatches", function(){
			expect(aa.c({name: "name", nested: {age: "nested_name"}},{name:"string", nested:{age:"number"}})).toBe(false);
		})
	})

	describe("it should be able to import json files", function(){
		beforeEach(function(done){
			aa.import("/base/dummy.json", function(){done()});
		})
		it("should create the types in the json file passed as a param", function(){
			expect(aa.human).not.toBeUndefined();
			expect(aa.car).not.toBeUndefined();
			expect(aa.pet).not.toBeUndefined();
			expect(aa.iceKing).not.toBeUndefined();
		})
		describe("validate correctly its types", function(){
			it("with trivial data types", function(){
				expect(aa.iceKing({isLame:true})).toBe(true);
				expect(aa.iceKing({isLame:3})).toBe(false);
			})
			it("with nested types", function(){
				expect(aa.pet({type: "dog", name: "otis", breed: "chanda", tricks: ["muerto"],
					owner:{name:"pacho", id:3, nationality:"colombian", belongings: [1,2,3]}})).toBe(true);
			})
			it("with should fail when theres a nested type mismatch", function(){
				expect(aa.pet({type: "dog", name: "otis", breed: "chanda", tricks: ["muerto"],
					owner:{name:10, id:3, nationality:"colombian", belongings: [1,2,3]}})).toBe(false);
			})
		})
	})
})
