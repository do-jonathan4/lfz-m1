
describe('whileLoop5(string)', function () {

    beforeEach(function () {
        expect(whileLoop5).to.be.a('function');
        });

        it('uses a while loop and a conditional statement to loop through the received string and concatenate every other character into a new string and return it. Returns "acegikmoqsuwy" when given "abcdefghijklmnopqrstuzwxyz" as an argument', function () {
            var output = whileLoop5("abcdefghijklmnopqrstuzwxyz");
            expect(output).to.equal("acegikmoqsuwy");
        });

    });
