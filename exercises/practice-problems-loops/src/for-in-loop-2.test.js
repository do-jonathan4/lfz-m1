
describe('forInLoop2(object)', function () {

    beforeEach(function () {
        expect(forInLoop2).to.be.a('function');
        });

        it('uses a for-in loop to loop through the supplied object and store all of the property values in an array and returns that array. For example, with the argument "{index_1: 1,index_2: 2,index_3: 3,index_4: 4,index_5: 5,index_6: 6,index_7: 7,index_8: 8,index_9: 9,index_10: 10,}" the function will return [1,2,3,4,5,6,7,8,9,10]', function () {
            var output = forInLoop2({index_1: 1,index_2: 2,index_3: 3,index_4: 4,index_5: 5,index_6: 6,index_7: 7,index_8: 8,index_9: 9,index_10: 10,});
            expect(output).to.eql([1,2,3,4,5,6,7,8,9,10]);
        });

    });
