function sum(...args) {
  return Array.from(args).reduce((acc, arg) => {
    let n = parseInt(arg);
    if (isNaN(n)) n = 0;
    return acc + n;
  }, 0);
}

module.exports = {
  sum,
};
