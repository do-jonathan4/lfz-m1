
describe('forLoop1()', function () {

    beforeEach(function () {
        expect(forLoop1).to.be.a('function');
        });

        it('uses a for loop to create and return the following array: [0,1,2,3,4,5,6,7,8,9]', function () {
            var output = forLoop1();
            expect(output).to.eql([0,1,2,3,4,5,6,7,8,9]);
        });

    });
