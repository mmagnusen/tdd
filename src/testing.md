# Describe
- describe() is a built-in method
- encapsulates a group of tests
- within terminal, acts as header before group of tests are shown
- first param is the name of the test, second is a function which returns the expected result of the test

```
    describe('The Sky', () => {

    })
```

# it
- We use the `it()` method for each scenario we want to cover in our test
- states what the test should actually achieve
- can also use `test()` method as an alternative

```
  describe('The Sky', () => {

      it('Should be blue, () => {
          const skyColor = sky('sunny');
          expect(skyColor).toBe('blue');
      })
    })
```


# expect 
- `expect()` method makes an assertion
- the assertion will return true or false. If true is return, the test passes, it false is returned, test fails

# Matchers
full list of matchers: 
https://jestjs.io/docs/en/expect.html#content

# Enzyme
https://airbnb.io/enzyme/
Enzyme is developed by Airbnb, it makes it easier to test React components
It does not come out of the box with React, we need to install it separately

# Shallow rendering
Shallow only looks at the top level component passed to it, it ignores any child components. These should be tested separately
Shallow is a unit test, because it only tests one function
If we want to test child components too, this would be an integration test

# Mount
Allows us to test the full component tree

# Key principle: Testing logic in isolation
- focussing on isolation helps us to separate logic and tests
- helps prevent code repetition
- each component should do just one thing


# Snapshot tests
Detect changes in markup

example of snapshot file: https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/__snapshots__/link.react.test.js.snap

```
expect(<MyComponent>).toMatchSnapshot();
```

# Simulating events

# Mock functions

# Need help with:
mock functions

// change here to test ghost inspector