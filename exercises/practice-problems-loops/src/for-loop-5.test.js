
describe('forLoop5()', function () {

    beforeEach(function () {
        expect(forLoop5).to.be.a('function');
        });

        it('uses a for loop and a conditional statement to create and return the following array: [20,18,16,14,12,10,8,6,4,2]', function () {
            var output =forLoop5();
            expect(output).to.eql([20,18,16,14,12,10,8,6,4,2]);
        });

    });
