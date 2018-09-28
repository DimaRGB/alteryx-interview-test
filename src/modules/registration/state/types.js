const types = [
  'REGISTER_PENDING',
  'REGISTER_SUCCESS',
  'REGISTER_FAILURE',
];

types.forEach(type => {
  module.exports[type] = `registration/${type}`;
});
