
describe('whileLoop7(string)', function () {

    beforeEach(function () {
        expect(whileLoop7).to.be.a('function');
        });

        it('uses a while loop to traverse a string argument and concatenate the characters at odd indices to a new string and return that string. For example, When the function receives the argument "This is a pretty long string", it will return the following string "hsi  rtyln tig"', function () {
            var output = whileLoop7("This is a pretty long string");
            expect(output).to.equal("hsi  rtyln tig");
        });

    });
