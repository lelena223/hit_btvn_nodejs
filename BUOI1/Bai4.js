// const user = {
//     studentCode: '2020605518',
//     password: '123',
//     firstName: 'Hung',
//     lastName: 'Truong',
//     age: 17,
//     faculty: 'information technology',
//     role: ['admin', 'user'],
//    };

// Object constructor
function User(studentCode, password, firstName, lastName, age, faculty, role){
    this.studentCode=studentCode;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.faculty=faculty;
    this.role=role;
}
var user = new User('2020605518', '123', 'Hung', 'Truong', 18, 'information technology', ['admin', 'user']);

console.log(user);


// class
class user{
    constructor(studentCode, password, firstName, lastName, age, faculty, role){
        this.studentCode=studentCode;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.faculty=faculty;
        this.role=role;
    }
}

var User = new user('2020605518', '123', 'Hung', 'Truong', 18, 'information technology', ['admin', 'user']);

console.log(User);