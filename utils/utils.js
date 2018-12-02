const add = (a,b) => {
  return (a && b) ? a + b : "both values must be sent";
};

module.exports.add = add;
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(()=> {
    callback(a + b);
  }, 3000);
};

module.exports.square = (x) => (x * x);

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.LastName = names[1];
  return user;
};

module.exports.sumParts = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.names = (name, callback) => {
  setTimeout(() => {
    const firstName = name.split(' ').slice(0, -1).join(' ');
    const lastName = name.split(' ').slice(-1).join(' ');
    callback({ firstName, lastName });
  }, 1000);
};
