
describe('forLoop7()', function () {

    beforeEach(function () {
        expect(forLoop7).to.be.a('function');
        });

        it('uses a for loop and a conditional statement to create and return the following array: [75,45,30,15,"Poof!"]', function () {
            var output = forLoop7();
            expect(output).to.eql([75,60,45,30,15,"Poof!"]);
        });

    });
