const add = (a,b) => {
  return (a && b) ? a + b : "both values must be sent";
};

module.exports.add = add;
