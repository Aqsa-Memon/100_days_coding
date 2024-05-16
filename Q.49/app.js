function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // Loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        // Logs a statement for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
logHobbies("coding", "typescript", "cycling", "reading");
