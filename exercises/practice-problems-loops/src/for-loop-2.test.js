
describe('forLoop2()', function () {

    beforeEach(function () {
        expect(forLoop2).to.be.a('function');
        });

        it('uses a for loop to create and return the following array: [0,2,4,6,8,10,12,14,16,18]', function () {
            var output = forLoop2();
            expect(output).to.eql([0,2,4,6,8,10,12,14,16,18]);
        });

    });
