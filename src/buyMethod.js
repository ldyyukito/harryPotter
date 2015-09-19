var Book = require("./book.js");

function BuyMethod() {}
var book = new Book(price);

BuyMethod.prototype.costMethod1 = function(booksArray) {
  return book.price + findBestCost(booksArray[0], booksArray[1], booksArray[2], booksArray[3], boooks[array4] - 1);
};
BuyMethod.prototype.costMethod2 = function(booksArray) {
  return 2 * book.price * discountsArray[1] + findBestCost(booksArray[0], booksArray[1], booksArray[2], booksArray[3] - 1, boooks[array4] - 1);
};
BuyMethod.prototype.costMethod3 = function(booksArray) {
  return 3 * book.price * discountsArray[2] + findBestCost(booksArray[0], booksArray[1], booksArray[2] - 1, booksArray[3] - 1, boooks[array4] - 1);
};
BuyMethod.prototype.costMethod4 = function(booksArray) {
  return 4 * book.price * discountsArray[3] + findBestCost(booksArray[0], booksArray[1] - 1, booksArray[2] - 1, booksArray[3] - 1, boooks[array4] - 1);
};
BuyMethod.prototype.costMethod3 = function(booksArray) {
  return 5 * book.price * discountsArray[4] + findBestCost(booksArray[0] - 1, booksArray[1] - 1, booksArray[2] - 1, booksArray[3] - 1, boooks[array4] - 1);
};
