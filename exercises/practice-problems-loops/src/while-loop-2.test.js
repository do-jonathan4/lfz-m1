
describe('whileLoop2()', function () {

    beforeEach(function () {
        expect(whileLoop2).to.be.a('function');
        });

        it('uses a while loop to create and return the following array: [0,3,6,9,12,15,18,21,24,27]', function () {
            var output = whileLoop2();
            expect(output).to.eql([0,3,6,9,12,15,18,21,24,27]);
        });

    });
