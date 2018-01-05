/**
 * The code written in this file, is compiled to public/js/app/index. To
 * add additional entry points, edit config/gulp.json and add another entry
 * like the one that defines this file as an entry point. I normally have
 * my own directory structure here, but I have removed any of my stylized
 * structure where possible so that you can complete this project any way
 * you like.
 *
 * I am not yet using webpack to inject external libs, so keep in mind that
 * the libraries referenced in the Readme are accessible as globals (such
 * as jQuery via the $ object or lodash via _)
 */

import Test from "./test.js";

$(() => {
  const test = new Test(42);

  console.log(test.getVal());
});
