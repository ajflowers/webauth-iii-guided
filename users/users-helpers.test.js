const { validateUser } = require('./users-helpers');

// sent an empty object, saw result fail
// sent an object with a username less than 2 characters, verified it failed
// sent an object with a valid username, no pw
// etc


describe('users helpers', () => {
    describe('validateUser()', () => {
        it('should fail if missing username and pw', () => {
            // Arrange: set up the world for the test
            const invalidUser = {};
            const expected = false;

            // Act: execute the system under test (SUT) => validateUser method
            const actual = validateUser(invalidUser);

            // Assert: we check the result
            expect(actual.isSuccessful).toBe(expected) //matchers
            expect(actual.errors).toHaveLength(2);
        });

        it('should fail if missing pw',() => {
            const result = validateUser({ username: "somebody"});

            expect(result.isSuccessful).toBe(false);
            expect(result.errors).toHaveLength(1);
        });

        it('should succeed if called with a valid user', () => {
            const result = validateUser({ 
                username: "somebody",
                password: "omgpassword"
            });

            expect(result.isSuccessful).toBe(true);
            expect(result.errors).toHaveLength(0);
        })

        it.todo('should fail if username is an object');
        it.todo('should fail if username is an array');
        it.todo('should fail if username is NaN');
        it.todo('should fail if username is null');

    })
})