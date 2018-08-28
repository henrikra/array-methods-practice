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
          student.suspended = false;
      }
      return student;
      });
    return ariNotSuspended;
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