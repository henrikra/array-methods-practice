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
    const ariNotSus = students.map(student => {
      if(student.name.first === 'Ari' && student.name.last === 'Liukkonen') {
        return {...student, suspended: false};
      }
        return student;
      });
    return ariNotSus;
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
    return students;
  },
  groupedByGrade(students) {
    return students;
  },
}