function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function() {
        console.log(`${this.name} is studying for the ${this.grade} grade.`);
    };
    this.getGrade = function() {
        return this.grade;
    };
}

const student1 = new Student("Alice", "A");

console.log("Name:", student1.name);       
console.log("Grade:", student1.getGrade()); 
student1.study();