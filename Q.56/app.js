var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
