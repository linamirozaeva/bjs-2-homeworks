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
    if (this.marks == 0){
        return 0;
    }
    if (this.marks) {
      this.marks.push(...marksToAdd);
    }
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
  student1.addMarks(4, 5, 4, 2, 5);
  student1.addMarks(5, 5, 5, 5);
  student1.exclude('плохое учебное посещение');
  console.log(student1);
  console.log(student2);