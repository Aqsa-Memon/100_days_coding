

let userProfile = (function() {
 
 let name = "John";
 let age = 20;

 
 return {
 displayInfo: function() {
 console.log(`Name: ${name}, Age: ${age}`);
 }
 };
})();


userProfile.displayInfo(); 


  