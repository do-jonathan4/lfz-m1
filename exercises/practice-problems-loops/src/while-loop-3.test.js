
describe('whileLoop3()', function () {

    beforeEach(function () {
        expect(whileLoop3).to.be.a('function');
        });

        it('uses a while loop and a conditional statement to create and return the following array: [49,42,35,28,21,14,7,0]', function () {
            var output = whileLoop3();
            expect(output).to.eql([49,42,35,28,21,14,7,0]);
        });

    });
