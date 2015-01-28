/*Made by Francisco Pinzon (hello@pacho.me) - 2014*/

(function(){

var root = this;

var aa={A:{},B:{},E:{}};

/*
Stolen from the underscore code: Export the aa objects
for Node.js, with backwards-compatibility for the old require() API.
 If we’re in the browser, add AA and aa as global objects.
*/
if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports={aa:aa};
	}
	exports.aa = aa;

} else {
	root.aa = aa;
}

aa.VERSION = '0.2.0';

aa.__createMessage = function(object, message){
	return JSON.stringify(object)+" "+message;
}


/*
Primitives
*/
aa.A.number = function(theNumber){
	if(isNaN(theNumber) || typeof(theNumber) !== "number"){
		return aa.__createMessage(theNumber,"is not a number");
	}
	else return undefined;
}

aa.A.boolean = function(theBoolean){
	if(typeof(theBoolean) !== "boolean"){
		return aa.__createMessage(theBoolean,"is not a boolean");
	}
	else return undefined;
}

aa.A.string = function(theString){
	if(typeof(theString) !== "string"){
		return aa.__createMessage(theString,"is not a string");
	}
	else return undefined;
}

aa.A.array = function(theArray){
	if(!Array.isArray(theArray)){
		return aa.__createMessage(theArray,"is not an array");
	}
	else return undefined;
}

/*This returns false when null is passed, not like the js perpetual bug*/
aa.A.object = function(theObject){
	if(typeof(theObject) !== "object" || theObject===null){
		return aa.__createMessage(theObject,"is not an object");
	}
	else return undefined;
}

aa.A.function = function(theFunction){
	if(typeof(theFunction) === "function"){
		return undefined;
	}
	else return aa.__createMessage(theFunction, "is not a function");
}

aa.A.undefined = function(theUndefined){
	if(theUndefined===null || typeof(theUndefined) === "undefined"){
		return undefined;
	}
	else return aa.__createMessage(theUndefined, "is not undefined");
}

/*
Inner utilities
*/

aa.__shorthands = {"b":"boolean",
					"n":"number",
					"s":"string",
					"a":"array",
					"o":"object",
					"f":"function",
					"u":"undefined"}

//Modified from the underscore version
aa.__isEmpty = function(obj) {
    if (obj == null) return true;
    if (aa.B.a(obj) || aa.B.s(obj)) return obj.length === 0;
    if(aa.B.o(obj) && Object.getOwnPropertyNames(obj).length!=0) return false;
    return true;
};


aa.__resultTypeToBoolean = function(result){
	return typeof(result)==='undefined' ||  Object.getOwnPropertyNames(result).length===0;
}
aa.__createStrictVersion = function(baseFunction){
	return function(theThing){
		var result = baseFunction(theThing);
		if(aa.__resultTypeToBoolean(result)){
			return aa.E;
		}
		else{
			throw new CustomError("AAssertionNotMetException", result);
		}
	}
}

aa.__createBooleanVersion = function(baseFunction){
	return function(theThing){
		var result = baseFunction(theThing);
		if(aa.__resultTypeToBoolean(result)){
			return true;
		}
		else{
			return false;
		}
	}
}

aa.__createPrimitiveShorthandsAndWrappedVersions=function(){
	for(var key in aa.__shorthands){
		var name = aa.__shorthands[key];
		//assign strict version
		aa.E[name] = aa.__createStrictVersion(aa.A[name]);
		//assign boolean version
		aa.B[name] = aa.__createBooleanVersion(aa.A[name]);

		//assign the shorthand for A
		aa.A[key]=aa.A[name];
		//assign the shorthand for B
		aa.B[key]=aa.B[name];
		//assign the shorthand for E
		aa.E[key]=aa.E[name];
	};
};
aa.__createPrimitiveShorthandsAndWrappedVersions();

function CustomError(name, message){
	this.name = name;
	this.message = message;
	this.toString = function() {
		return this.value + ": "+this.message
	};
}



/*
Custom types
*/
aa.define = function(typeName,typeDescription){
	aa.E.s(typeName).o(typeDescription);
	if(aa.__isEmpty(typeDescription)){
		throw new CustomError("EmptyTypeDescriptionError",
		"The type description can not be an empty object");
	}
	else{
		aa.A[typeName] = aa.__customCheck(typeName,typeDescription);
		//assign strict version
		aa.E[typeName] = aa.__createStrictVersion(aa.A[typeName]);
		//assign boolean version
		aa.B[typeName] = aa.__createBooleanVersion(aa.A[typeName]);
	}
}
aa.__customCheck = function(typeName, typeDescriptor){
	aa.E.o(typeDescriptor);

	return function(object){
		aa.E.o(object);

		var resultObject = {};

		for(var key in typeDescriptor){
			var type = typeDescriptor[key], value = object[key];
			//If the type is an object go recursive.
			if(aa.B.o(type)){

				debugger;
				var result = aa.__customCheck(key,type)(value);
				if(!aa.__resultTypeToBoolean(result)){
					resultObject[key]=result;
				}

			}
			else{
				aa.E.s(type);
				if (!aa.B[type](value)){
					resultObject[key] = aa.A[type](value);
				}
			}
		}

		console.log("name", typeName);
		console.log("descriptor", typeDescriptor);
		console.log("object", object);
		console.log("result", resultObject);
		console.log("");
		return resultObject;
	}
}

/*
ad hoc types
*/
aa.A.c = function(theThing, typeDescriptor){
	return aa.__customCheck("ad-hoc type", typeDescriptor)(theThing);
}

aa.E.c = function(theThing, typeDescriptor){
	return aa.__createStrictVersion(aa.__customCheck("ad-hoc type", typeDescriptor))(theThing);
}
aa.B.c = function(theThing, typeDescriptor){
	return aa.__createBooleanVersion(aa.__customCheck("ad-hoc type", typeDescriptor))(theThing);
}

/*
json file loading
*/
aa.import = function(jsonUrl, callback){
	aa.E.s(jsonUrl);
	var oReq = new XMLHttpRequest();

	oReq.onload = function() {
		var jsonObject = JSON.parse(this.responseText);
		for(var key in jsonObject){
			aa.define(key, jsonObject[key])
		}
		if(!aa.B.u(callback)) callback();
	};

	oReq.open("get", jsonUrl, true);
	oReq.send();
}

})();
