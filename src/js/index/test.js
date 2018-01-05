/**
 * See the example.js file for more info
 */

/**
 * Test class to show how ES6 imports/exports work
 */
export default class Test {
  /**
   * Construct the test object
   * @param {Number} val Value to store
   */
  constructor(val) {
    this.val = val;
  }

  /**
   * Get the stored value
   * @return {Number}
   */
  getVal() {
    return this.val;
  }
}
