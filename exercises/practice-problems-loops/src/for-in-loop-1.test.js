
describe('forInLoop1(object)', function () {

    beforeEach(function () {
        expect(forInLoop1).to.be.a('function');
        });

        it('uses a for-in loop to loop through the supplied object and store all of the property names in an array and returns that array. For example, with the argument "{index_1: 1,index_2: 2,index_3: 3,index_4: 4,index_5: 5,index_6: 6,index_7: 7,index_8: 8,index_9: 9,index_10: 10,}" the function will return [index_1,index_2,index_3,index_4,index_5,index_6,index_7,index_8,index_9,index_10]', function () {
            var output = forInLoop1({index_1: 1,index_2: 2,index_3: 3,index_4: 4,index_5: 5,index_6: 6,index_7: 7,index_8: 8,index_9: 9,index_10: 10,});
            expect(output).to.eql(["index_1","index_2","index_3","index_4","index_5","index_6","index_7","index_8","index_9","index_10"]);
        });

    });
