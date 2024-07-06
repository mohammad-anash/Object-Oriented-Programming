// Object Oriented Programming = In Javascript is a way organize our code around object. An object like a container that holds data like (Properties and varialble) and (function or Method) that can work on data

// Table OF Content
// Object
// Classes (keyword)
// Constructor
// New (keyword)
// Inheritandce
// super (keyword)

// Object = think of object like container that hold related information (properties) and action (methods) that can be performed on that information

// Classes = in javascript classes are used to blueprint or templates to create object. they define what properti and method should have

// Constructor = in javascript constructor is a method that is automatically. called when you create a object instance of a class. constructor use for object intialize. it's we want to perform some action before we need to intialize ore object.

// New = it's very simple. when we write new keyword in front of class name it's automatically create two things
// Frist new create object
// second return new Object

// Inheritandce = this mean one object inherit properties and method from anotherobject. for example we have car classes and another class object vehicle we can access car class propertied and method.

// Super = keyword in used class to call constructor or access properties and method og parent (SuperClass)
// this  = this Object
// super = the parent

// CLASS EXAMPLE

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  aboutPerson() {
    console.log(`my name is ${this.name} and my age is ${this.age}`);
  }
}

const person = new Person("anash", 90);
// console.log(person); // Person {name: 'anash', age: 90}

// in this example we create simple class called person. we intialize object with constructor and create aboutPerson method for display person information

// INHERITANCE EXAMPLE

class Parent {
  constructor(name, age) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const child = new Child("anash", 30);
console.log(child.name); //  anash
console.log(child.age); //  30

// you see in this example we can access parent name property inside child class

// We can also access method with using super and extends keyword
// extends = use for inherite object

class User {
  ParentMethod() {
    console.log("Parent Method");
  }
}

class UserTwo extends User {
  ChildMethod() {
    console.log("Parent Method");
    super.ParentMethod();
  }
}
const userTwo = new UserTwo();
console.log(userTwo.ChildMethod()); // Parent Method

// you can see we can access method from parent class

// let's do some fun task with object oreinted programming

// create book application that manage book information  like author and title and isbn
// one book class that meneage book information
// second library class that provide books have in library

class Book {
  constructor(title, author, isbn, status) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = status;
  }

  getInfo() {
    return `${this.title} by ${this.author}, ISBN: ${this.isbn}, Status: ${this.status}`;
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  listAvailableBooks() {
    return this.books.filter((book) => book.status === "available");
  }

  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && book.status === "available") {
      book.status = "borrowed";
      return `You have borrowed: ${book.getInfo()}`;
    } else {
      return `Book is not available or does not exist.`;
    }
  }

  returnBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && book.status === "borrowed") {
      book.status = "available";
      return `You have returned: ${book.getInfo()}`;
    } else {
      return `Book was not borrowed or does not exist.`;
    }
  }
}

// Example usage
const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("1984", "George Orwell", "0987654321");

// console.log(book1.getInfo());

// library.addBook(book1);
// library.addBook(book2);

// console.log("Available Books:");
// library.listAvailableBooks().forEach((book) => console.log(book.getInfo()));

// console.log(library.borrowBook("1234567890"));
// console.log("Available Books after borrowing:");
// library.listAvailableBooks().forEach((book) => console.log(book.getInfo()));

// console.log(library.returnBook("1234567890"));
// console.log("Available Books after returning:");
// library.listAvailableBooks().forEach((book) => console.log(book.getInfo()));

// Zaroor! Yahan ek beginner-friendly task hai jo object-oriented programming se related hai:

// Task: Student Management System
// Requirements:
// Classes and Objects:

// Ek Student class banaiye jo ek student ko represent karegi.
// Ek Classroom class banaiye jo ek classRoom ko manage karegi.
// Student Class:

// Student class ke constructor mein name, age, rollNumber, aur grades properties honi chahiye.
// Methods:
// getDetails(): Ek string return kare jo student ki sari information (name, age, roll number, grades) dikhaye.
// addGrade(grade): Ek naye grade ko student ke grades array mein add kare.
// Classroom Class:

// Classroom class ke constructor mein ek students array hona chahiye jo classRoom mein available students ko store karega.
// Methods:
// addStudent(student): Ek naye student ko classRoom mein add kare.
// removeStudent(rollNumber): Roll number ke basis par ek student ko classRoom se remove kare.
// getStudentDetails(rollNumber): Roll number ke basis par ek student ke details return kare.

// Student class
class Student {
  constructor(name, age, rollNumber) {
    this.name = name;
    this.age = age;
    this.rollNumber = rollNumber;
    this.grades = [];
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Roll Number: ${
      this.rollNumber
    }, Grades: ${this.grades.join(", ")}`;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }
}

// Classroom class
class Classroom {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(rollNumber) {
    this.students = this.students.filter(
      (student) => student.rollNumber !== rollNumber
    );
  }

  getStudentDetails(rollNumber) {
    const student = this.students.find(
      (student) => student.rollNumber === rollNumber
    );
    return student ? student.getDetails() : "Student not found";
  }
}

// Example usage
const classroom = new Classroom();

// const student1 = new Student("Amit", 15, "101");
// const student2 = new Student("Neha", 16, "102");

// classroom.addStudent(student1);
// classroom.addStudent(student2);

// console.log(classroom.getStudentDetails("101")); // Get details of student with roll number '101'

// student1.addGrade("A");
// student1.addGrade("B");

// console.log(classroom.getStudentDetails("101")); // Get updated details of student with roll number '101'

// classroom.removeStudent("102");
// console.log(classroom.getStudentDetails("102")); // Try to get details of removed student with roll number '102'

// let's do some Fun task with oops

// Bank Account System:

// Create a BankAccount class that includes account number, account balance, and account holder's name.
// Include methods like deposit, withdraw, and getBalance in this class.
// Create subclasses SavingsAccount and CurrentAccount that inherit from BankAccount and add some unique methods of their own.

class BankAccount {
  constructor(accountNumber, accountBalance, accountHolderName) {
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
    this.accountHolderName = accountHolderName;
  }
  deposit(amount) {
    this.accountBalance + amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}`);
  }
  withdraw(amount) {
    this.accountBalance - amount;
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  getBalance() {
    return this.accountBalance;
  }
}

class SavingsAccount extends BankAccount {}
