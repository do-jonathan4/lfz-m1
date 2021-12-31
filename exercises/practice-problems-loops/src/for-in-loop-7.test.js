
describe('forInLoop7(object)', function () {

    beforeEach(function () {
        expect(forInLoop7).to.be.a('function');
        });

        it('uses a for-in loop to loop through the supplied object and stores all of the properties which have boolean values in an array and returns that array. For example, with the argument "{name: "jimmy",age: 32,dog: false,cat: true,favorite_food: "sushi",favorite_number: 42,favorite_movie:"Tron: Legacy",greatest_fear: "clowns",favorite_song: "",hours_of_sleep: null}" will return ["dog", "cat"]', function () {
            var output = forInLoop7({name: "jimmy",age: 32,dog: false,cat: true,favorite_food: "sushi",favorite_number: 42,favorite_movie:"Tron: Legacy",greatest_fear: "clowns",favorite_song: "",hours_of_sleep: null});
            expect(output).to.eql(["dog", "cat"]);
        });

    });
