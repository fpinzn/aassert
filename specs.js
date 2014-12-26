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


})
