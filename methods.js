module.exports = {
  firstNamesOnly(students) {
    const nameArray = students.map(function(element) {
      return element.name.first;
    });
    return nameArray;
  },

  fullNamesOnly(students) {
    const studentNames = students.map(function(student) {
      return student.name.first.concat(' ', student.name.last);
    });
    return studentNames;
  },

  ariNotSuspended(students) {
    let name = 'Ari'
    const ariModified = students.map(student => {
      if (student.name.first === name) {
        student = { ...student, suspended: false };
      }
      return student;
    });
    return ariModified;
  },

  gradesBelow8(students) {
    const newArray = students.filter(student => student.grade < 8);
    return newArray;
  },
  gradesBelow8orOver9(students) {
    const newArray = students.filter(student => student.grade < 8 || student.grade > 9);
    return newArray;
  },
  collectiveGrade(students) {
    const massGrade = students.reduce(function(a, b) {
      return a + b.grade;
    }, 0);
    return massGrade;
  },
  groupedByGrade(students) {
    const result = students.reduce((acc, curr) => Object.assign(acc, { [curr.grade]: (acc[curr.grade] || []).concat(curr) }), {});
    return result;
  }
}