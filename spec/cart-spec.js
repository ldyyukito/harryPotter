var Cart = require("../src/cart.js");
describe("Cart", function() {
  var books = ['firstBook', 'firstBook', 'secondBook', 'secondBook', 'thirdBook', 'thirdBook',
    'forthBook', 'fifthBook'];

  var cart = new Cart();

  it("get booksList", function() {
    var booksList = cart.classifyBooks(books);
    var result = [{
      type: 'firstBook',
      count: 2
    }, {
      type: 'secondBook',
      count: 2
    }, {
      type: 'thirdBook',
      count: 2
    }, {
      type: 'forthBook',
      count: 1
    }, {
      type: 'fifthBook',
      count: 1
    }];
    expect(booksList).toEqual(result);
  });

  it("get booksArray", function() {
    var booksArray = cart.sortBooksArray(books);
    expect(booksArray).toEqual([1,1,2,2,2]);
  });

});
