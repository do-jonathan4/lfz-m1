
describe('forLoop3()', function () {

    beforeEach(function () {
        expect(forLoop3).to.be.a('function');
        });

        it('uses a for loop and a conditional statement to create and return the following array: [0,3,6,9,12,15,18,21,24,27]', function () {
            var output = forLoop3();
            expect(output).to.eql([0,3,6,9,12,15,18,21,24,27]);
        });

    });
