/**
 * Tests to see if a string is a valid constant
 * 
 * @param {Object} constants The constants to test against
 * @param {String} test The string to be tested
 * @return true if the string appears in the constants object\n
 *         false otherwise
 */
const validateConstant = (constants, test) => {
  const values = Object.values(constants);
  let result = values.find(val => val === test);
  return result === undefined ? false : true;
};

export default validateConstant;