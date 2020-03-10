describe("HarryBooks", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new HarryBooks();
    });
 
    describe("When calc is used to apply necessary discount: ", function(){

        it("Buy 5 books with different title apply  25% discount", function() {
            expect(calc.compute(1,1,1,1,1)).toEqual(30);
        });
         
        it("Buy 4 books with different title apply  20% discount", function() {
            expect(calc.compute(1,1,1,1,0)).toEqual(25.6);
        });

        it("Buy 3 books with different title apply  10% discount", function() {
            expect(calc.compute(1,1,1,0,0)).toEqual(21.6);
        });

        it("Buy 2 books with different title apply  5% discount", function() {
            expect(calc.compute(1,1,0,0,0)).toEqual(15.2);
        });

        it("Apply the biggest discount possible if customer buy a multiple selection. Note: books that are not part of a set still cost 8 EUR", function() {
            expect(calc.compute(1,2,3,4,5)).toEqual(100.4);
        });

        it("Buy more than 1 book with same title no discount", function() {
            expect(calc.compute(3,0,0,0,0)).toEqual(24);
        });
         
    });
});