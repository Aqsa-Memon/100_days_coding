function createObject(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObject("theme", "dark");
console.log(userPreference);
