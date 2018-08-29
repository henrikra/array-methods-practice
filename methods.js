module.exports = {
  firstNamesOnly(students) {
    const firstNames = students.map(student => student.name.first);
    return firstNames;
  },
  fullNamesOnly(students) {
    const fullNames = students.map(student => `${student.name.first} ${student.name.last}`);
    return fullNames;
  },
  ariNotSuspended(students) {
    const ariNotSuspended = students.map(student => {
      if(student.name.first === 'Ari' && student.name.last === 'Liukkonen') {
        return {...student, suspended: false};
      }
        return student;
      });
    return ariNotSuspended;
  },
  gradesBelow8(students) {
    const gradesBelow8 = students.filter(student => student.grade < 8);
    return gradesBelow8;
  },
  gradesBelow8orOver9(students) {
    const gradesBelow8orOver9 = students.filter(student => student.grade < 8 || student.grade > 9);
    return gradesBelow8orOver9;
  },
  collectiveGrade(students) {
    const collectiveGrade = students.reduce((a,b) => a + b.grade, 0);
    return collectiveGrade;
  },
  groupedByGrade(students) {
    const groupedByGrade = students.reduce(function (obj, student) {
      obj[student.grade] = obj[student.grade] || [];
      obj[student.grade].push(student);
      return obj;
  }, {});
    return groupedByGrade;
  },
}