const student1 = {
  id: 1,
  name: "Alice",
  age: 21,
  course: "Computer Science",
  marks: {
    math: 85,
    physics: 78,
    chemistry: 88
  },
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

const student2 = {
  id: 2,
  name: "Bob",
  age: 22,
  course: "Information Technology",
  marks: {
    math: 90,
    physics: 82,
    chemistry: 79
  },
  address: {
    city: "Bangalore",
    pincode: 560001
  }
};

student1.email = "alice@example.com";
student2.email = "bob@example.com";

student1.age = 23;
student2.course = "Software Engineering";

const college = {
  name: "ABC College",
  location: "India",
  students: [student1, student2]
};

college.establishedYear = 2000;

student1.marks.math = 95;
student2.marks.physics = 88;

college.students[0].address.city = "Mumbai";
college.students[1].address.city = "Hyderabad";

const classroom = {
  roomNumber: 101,
  capacity: 60,
  hasProjector: true
};

college.classroom = classroom;

student1.status = "active";
student2.status = "active";

student1.rank = 1;
student2.rank = 2;

college.students.push({
  id: 3,
  name: "Charlie",
  age: 20,
  course: "AI",
  marks: {
    math: 88,
    physics: 91,
    chemistry: 85
  },
  address: {
    city: "Delhi",
    pincode: 110001
  },
  status: "active",
  rank: 3
});

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("College Info:", college);

console.log("All Students:");
for (let i = 0; i < college.students.length; i++) {
  console.log(college.students[i]);
}

console.log("Student Names:");
for (let i = 0; i < college.students.length; i++) {
  console.log(college.students[i].name);
}

console.log("Student Cities:");
for (let i = 0; i < college.students.length; i++) {
  console.log(college.students[i].address.city);
}