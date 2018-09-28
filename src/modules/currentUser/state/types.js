const types = [
  'REGISTER'
];

types.forEach(type => {
  module.exports[type] = `currentUser/${type}`;
});
