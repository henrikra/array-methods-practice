const methods = require('./methods');

const students = [
  { name: { first: 'Henrik', last: 'Pekkonen' }, grade: 9, suspended: false },
  { name: { first: 'Aleksi', last: 'Jääskeläinen' }, grade: 8, suspended: false },
  { name: { first: 'Ari', last: 'Liukkonen' }, grade: 7, suspended: true },
  { name: { first: 'Erik', last: 'Heino' }, grade: 8, suspended: false },
  { name: { first: 'Bhanu', last: 'Rantanen' }, grade: 8, suspended: true },
  { name: { first: 'Besserwisser', last: 'Ranta' }, grade: 10, suspended: false }
];

test('array of strings first name', () => {
  expect(methods.firstNamesOnly(students)).toEqual([
    'Henrik',
    'Aleksi',
    'Ari',
    'Erik',
    'Bhanu',
    'Besserwisser'
  ]);
});

test('array of strings with full name', () => {
  expect(methods.fullNamesOnly(students)).toEqual([
    'Henrik Pekkonen',
    'Aleksi Jääskeläinen',
    'Ari Liukkonen',
    'Erik Heino',
    'Bhanu Rantanen',
    'Besserwisser Ranta'
  ]);
});

test('get students but Ari Liukkonen is not suspended anymore', () => {
  expect(methods.ariNotSuspended(students)).toEqual([
    { name: { first: 'Henrik', last: 'Pekkonen' }, grade: 9, suspended: false },
    { name: { first: 'Aleksi', last: 'Jääskeläinen' }, grade: 8, suspended: false },
    { name: { first: 'Ari', last: 'Liukkonen' }, grade: 7, suspended: false },
    { name: { first: 'Erik', last: 'Heino' }, grade: 8, suspended: false },
    { name: { first: 'Bhanu', last: 'Rantanen' }, grade: 8, suspended: true },
    { name: { first: 'Besserwisser', last: 'Ranta' }, grade: 10, suspended: false }
  ]);
});

test('array containing only students with grade below 8', () => {
  expect(methods.gradesBelow8(students)).toEqual([
    { name: { first: 'Ari', last: 'Liukkonen' }, grade: 7, suspended: true }
  ]);
});

test('array containing only students with grade below 8 or over 9', () => {
  expect(methods.gradesBelow8orOver9(students)).toEqual([
    { name: { first: 'Ari', last: 'Liukkonen' }, grade: 7, suspended: true },
    { name: { first: 'Besserwisser', last: 'Ranta' }, grade: 10, suspended: false }
  ]);
});

test('all grades added together', () => {
  expect(methods.collectiveGrade(students)).toEqual(50);
});

test('students grouped by grade', () => {
  expect(methods.groupedByGrade(students)).toEqual({
    7: [{ name: { first: 'Ari', last: 'Liukkonen' }, grade: 7, suspended: true }],
    8: [
      { name: { first: 'Aleksi', last: 'Jääskeläinen' }, grade: 8, suspended: false },
      { name: { first: 'Erik', last: 'Heino' }, grade: 8, suspended: false },
      { name: { first: 'Bhanu', last: 'Rantanen' }, grade: 8, suspended: true }
    ],
    9: [{ name: { first: 'Henrik', last: 'Pekkonen' }, grade: 9, suspended: false }],
    10: [{ name: { first: 'Besserwisser', last: 'Ranta' }, grade: 10, suspended: false }]
  });
});
