
describe('whileLoop6(number)', function () {

    beforeEach(function () {
        expect(whileLoop6).to.be.a('function');
        });

        it('uses a while loop to generate an array which counts up from the supplied number and generates an array with a length that matches the number. When the function receives the argument 7, it will return an array with the following values [8,9,10,11,12,13,14]', function () {
            var output = whileLoop6(7);
            expect(output).to.eql([8,9,10,11,12,13,14]);
        });

    });
