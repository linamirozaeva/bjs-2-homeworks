function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  }
  Student.prototype.addMarks = function(...marksToAdd){
    if (this.marks) {
      this.marks.push(...marksToAdd);
    }
    if (this.marks.length === 0) {
        return 0;
    }
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length
  }
  Student.prototype.getAverage = function() {
    if (this.marks) {
      return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
    } else {
      return 0;
    }
  }
  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  let student1 = new Student("Василиса", "женский", 19);
  let student2 = new Student("Артем", "мужской", 25);
  student1.setSubject("Algebra");
  student1.addMarks(4, 5, 4, 5);
  student1.exclude('плохое поведение');
  student2.setSubject("Geometry");
  student2.addMarks(4, 4, 4, 4);
  student2.exclude('плохая учёба');
  console.log(student1);
  console.log(student2);