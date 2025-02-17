module.exports = {
  getDateWithoutTimeFromDate (date) {
    return date.toISOString().substring(0, 10);
  }
};
