const types = [
  'SET_CURRENT_USER'
];

types.forEach(type => {
  module.exports[type] = `currentUser/${type}`;
});
