
describe('forLoop4()', function () {

    beforeEach(function () {
        expect(forLoop4).to.be.a('function');
        });

        it('uses a for loop and a conditional statement to create and return the following array: [0,5,10,15,20,25,30,35,40,45]', function () {
            var output = forLoop4();
            expect(output).to.eql([0,5,10,15,20,25,30,35,40,45]);
        });

    });
