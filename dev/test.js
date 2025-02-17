const { getDateWithoutTimeFromDate } = require('@arnaud.buchholz/prod');

module.exports = {
  test (date) {
    return getDateWithoutTimeFromDate(date);
  }
};
