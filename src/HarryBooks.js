HarryBooks = function() {};

HarryBooks.prototype.compute = function(book1, book2, book3, book4, book5) {

        var books = [book1,book2,book3,book4,book5];
        var max = Math.max(book1,book2,book3,book4,book5);

        var sum = 0;

        for(var i = 0; i < max; i++){
            var count = 0;

            for(var x = 0; x < books.length; x++){
                if(books[x] != 0){
                    books[x] = books[x] - 1;
                    count++;
                }
            }

            var total = 0;
            total = 8 * count;

            switch(count){
                case 5:
                sum += total - (total*0.25);
                break;

                case 4:
                sum += total - (total*0.20);
                break;

                case 3:
                sum += total - (total*0.10);
                break;

                case 2:
                sum += total - (total*0.05);
                break;

                case 1:
                sum += total;
                break;

                default:
                sum += 0;

            }

        }

        return sum;
}