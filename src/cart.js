function Cart() {
  this.cartItems = [];
}

Cart.prototype.classifyBooks = function(books) {
    var obj = {};
    var booksList = [];
    books.forEach(function(val) {
        obj[val] =  (obj[val]+1) || 1;
    });
    for (var i in obj) {
        booksList.push({
            type: i,
            count: obj[i]
        });
    }
    return booksList;
};

Cart.prototype.sortBooksArray= function(books) {
  var array = [];
  this.classifyBooks(books).forEach(function(val) {
    array.push(val.count);
  });
  var booksArray = array.sort();
  return booksArray;
};

module.exports = Cart;
