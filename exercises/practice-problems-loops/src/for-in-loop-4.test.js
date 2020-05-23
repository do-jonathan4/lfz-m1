
describe('forInLoop4(object)', function () {

    beforeEach(function () {
        expect(forInLoop4).to.be.a('function');
        });

        it('uses a for-in loop to loop through the supplied object and stores all of the values which have a type of string in an array and returns that array. For example, with the argument "{name: "jimmy",age: 32,dog: false,cat: true,favorite_food: "sushi",favorite_number: 42,favorite_movie:"Tron: Legacy",greatest_fear: "clowns",favorite_song: "",hours_of_sleep: null}" will return ["jimmy","sushi","Tron: Legacy", "clowns", ""]', function () {
            var output = forInLoop4({name: "jimmy",age: 32,dog: false,cat: true,favorite_food: "sushi",favorite_number: 42,favorite_movie:"Tron: Legacy",greatest_fear: "clowns",favorite_song: "",hours_of_sleep: null});
            expect(output).to.eql(["jimmy","sushi","Tron: Legacy", "clowns", ""]);
        });

    });
