
function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
    // Logs a statement for each hobby
    console.log(`I enjoy ${hobby}.`);
    });
   }
   logHobbies("coding","typescript","cycling","reading");