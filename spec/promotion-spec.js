var Promotion = require("../src/promotion.js");
describe("Promotion",function(){
  it("get the discountsArray in cart",function(){
    var promotion = new Promotion();
    var booksArray = [1,1,2,2];
    var discountsArray = promotion.getDiscountsArray(booksArray);
    expect(discountsArray).toEqual([1,0.95,0.9,0.8]);
  });
});
