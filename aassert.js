/*Made by Francisco Pinzon (hello@pacho.me) - 2014*/

(function(){

var root = this;

var aa={}, AA={};

/*
Stolen from the underscore code: Export the AA and aa objects
for Node.js, with backwards-compatibility for the old require() API.
 If we’re in the browser, add AA and aa as global objects.
*/
if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports;
	}
	exports.aa = aa;
	exports.AA = AA;

} else {
	root.aa = aa;
	root.AA = AA;
}

AA.VERSION = aa.VERSION = '0.0.1';

/*
Primitives
*/
aa.number = function(theNumber){
	if(isNaN(theNumber)) return false;
	else return typeof(theNumber) === "number";
}

aa.boolean = function(theBoolean){
	return typeof(theBoolean) === "boolean";
}

aa.string = function(theString){
	return typeof(theString) === "string";
}

aa.array = function(theArray){
	return Array.isArray(theArray);
}

/*This returns false when null is passed, not like the js perpetual bug*/
aa.object = function(theObject){
	if(theObject===null) return false
	else return typeof(theObject) === "object";
}

aa.function = function(theFunction){
	return typeof(theFunction) === "function";
}

aa.undefined = function(theUndefined){
	if(theUndefined===null) return true
	else return typeof(theUndefined) === "undefined";
}

/*
Inner utilities
*/

var shorthands = {"b":"boolean",
					"n":"number",
					"s":"string",
					"a":"array",
					"o":"object",
					"f":"function",
					"u":"undefined"}

void function createPrimitiveShorthandsAndStrictVersions(){
	for(var key in shorthands){
		var name = shorthands[key];
		//assign strict version
		AA[name] = createStrictVersion(name);
		//assign the shorthand for aa
		aa[key]=aa[name];
		//assign the shorthand for AA
		AA[key]=AA[name];
	};
}();

function CustomError(name, message){
	this.name = name;
	this.message = message;
	this.toString = function() {
		return this.value + ": "+this.message
	};
}


function createStrictVersion(type){
	if(!aa.function(aa[type])) throw new CustomError("AAssertionNotDefined", "aa."+type+ " is not a function.");
	return function(theThing){
		if(!aa[type](theThing)){
			throw new CustomError("AAssertionNotMetException", "Type checking for "+type+ " not met");
		}
		else{
			return AA;
		}
	}
}

/*
Custom types
*/
aa.define= function(typeName,typeDescription){
	AA.s(typeName);
	AA.o(typeDescription);
	if(Object.getOwnPropertyNames(typeDescription).length === 0){
		throw new CustomError("EmptyTypeDescriptionError",
		"The type description can not be an empty object");
	}
	else{
		aa[typeName] = aa.customCheck(typeDescription);
		AA[typeName] = createStrictVersion(typeName);
	}
}
aa.customCheck = function(typeDescriptor){
	return function(object){
		for(var key in typeDescriptor){
			if(!aa[typeDescriptor[key]](object[key])) return false;
		}
		return true;
	}
}

})();
