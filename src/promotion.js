function Promotion() {
  this.promotion = [{
    bookTypes: 1,
    discount: 1
  }, {
    bookTypes: 2,
    discount: 0.95
  }, {
    bookTypes: 3,
    discount: 0.9
  }, {
    bookTypes: 4,
    discount: 0.8
  }, {
    bookTypes: 5,
    discount: 0.75
  }];
}

Promotion.prototype.getDiscountsArray = function(booksArray) {
  var array = this.promotion.filter(function(val) {
    return val.bookTypes <= booksArray.length;
  }).map(function(val) {
    return val.discount;
  });
  return array;
};

module.exports = Promotion;
