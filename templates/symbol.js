var sym = Symbol("foo");
typeof sym; // "symbol"
var symObj = Object(sym);
typeof symObj; // "object"

typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
  console.log(i); // выведет "c" и "d"
}