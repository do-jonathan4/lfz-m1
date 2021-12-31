
describe('forLoop6()', function () {

    beforeEach(function () {
        expect(forLoop6).to.be.a('function');
        });

        it('uses a for loop and a conditional statement to create and return the following array: [60,55,50,45,40,35,30,25,20,15,10,5,"Boom!"]', function () {
            var output = forLoop6();
            expect(output).to.eql([60,55,50,45,40,35,30,25,20,15,10,5,"Boom!"]);
        });

    });
