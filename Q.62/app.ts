
// Creating a blueprint (interface) for student information
interface Student {
 name: string;
 age: number;
 courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
 name: "Alice",
 age: 22,
 courses: ["Math", "Science", "History"]
};

// Showing the student's information
console.log(student);

