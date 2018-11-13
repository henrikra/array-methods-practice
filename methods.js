module.exports = {
  firstNamesOnly(students) {
    const studentNames = [];
    students.forEach(element => {
      studentNames.push(element.name.first)
    });
    return studentNames;
  },

  fullNamesOnly(students) {
    const studentNames = [];
    students.forEach(element => {
      const firstName = element.name.first;
      const lastName = element.name.last;
      const fullName = firstName.concat(' ', lastName);
      studentNames.push(fullName);
    })
    return studentNames;
  },

  ariNotSuspended(students) {
    const newArray = JSON.parse(JSON.stringify(students));
    newArray[2].suspended = false;
    return newArray;
  },

  gradesBelow8(students) {
    const newArray = students.filter(e => e.grade < 8);
    return newArray;
  },
  gradesBelow8orOver9(students) {
    const newArray = students.filter(e => e.grade < 8 || e.grade > 9);
    return newArray;
  },
  collectiveGrade(students) {
    const reducer = students.reduce(function(a, b) {
      console.log('accumulative ', a, ' current ', b);
      return a + b.grade;
    }, 0);
    return reducer;
  },
  groupedByGrade(students) {
    const newArray = [...students];
    const sevens = newArray.filter(e => e.grade === 7);
    const eights = newArray.filter(e => e.grade === 8);
    const ninths = newArray.filter(e => e.grade === 9);
    const tens = newArray.filter(e => e.grade === 10);
    const finalObject = {
      7 : sevens,
      8 : eights,
      9 : ninths,
      10 : tens
    };
   return finalObject;
  },
}