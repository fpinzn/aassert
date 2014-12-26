/*Made by Francisco Pinzon (hello@pacho.me) - 2014*/

var AA={};
var aa={};

/*
Primitives
*/
aa.number = function(theNumber){
	if(isNaN(theNumber)) return false;
	else return typeof(theNumber) === "number";
}
aa.n = aa.number;

aa.boolean = function(theBoolean){
	return typeof(theBoolean) === "boolean";
}
aa.b = aa.boolean;

aa.string = function(theString){
	return typeof(theString) === "string";
}
aa.s = aa.string;

aa.array = function(theArray){
	return Array.isArray(theArray);
}
aa.a = aa.array;

/*This returns false when null is passed, not like the js perpetual bug*/
aa.object = function(theObject){
	if(theObject===null) return false
	else return typeof(theObject) === "object";
}
aa.o = aa.object;

aa.function = function(theFunction){
	return typeof(theFunction) === "function";
}
aa.f = aa.function;

aa.undefined = function(theUndefined){
	if(theUndefined===null) return true
	else return typeof(theUndefined) === "undefined";
}
aa.u = aa.undefined;
