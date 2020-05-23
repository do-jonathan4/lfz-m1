
describe('whileLoop4()', function () {

    beforeEach(function () {
        expect(whileLoop4).to.be.a('function');
        });

        it('uses a while loop and a conditional statement to create and return the following array: [17,15,13,11,9,7,5,3,1]', function () {
            var output = whileLoop4();
            expect(output).to.eql([17,15,13,11,9,7,5,3,1]);
        });

    });
