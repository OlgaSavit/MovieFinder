const checkYear = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("Please input the year"));
  } else {
    callback();
  }
};
const isRequired = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the value"));
  } else {
    callback();
  }
};

export { checkYear, isRequired };
