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
    return students;
  },
  gradesBelow8(students) {
    return students;
  },
  gradesBelow8orOver9(students) {
    return students;
  },
  collectiveGrade(students) {
    return students;
  },
  groupedByGrade(students) {
    return students;
  },
}