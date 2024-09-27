function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Example usage:
receivesAFunction(function() {
    console.log("Callback function called!");
});


// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function");
    }
    return namedFunction;
}


describe('index', function() {
    let namedFunc;

    // "before all" hook
    before(function() {
        namedFunc = returnsANamedFunction(); // Set up named function before tests
    });

    it('returns a named function', function() {
        assert.strictEqual(typeof namedFunc, 'function'); // Check if it's a function
    });

    it('calls the named function', function() {
        namedFunc(); // This should log "This is a named function"
    });
});


// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");
    };
}



describe('index', function() {
    let anonFunc;

    // "before all" hook
    before(function() {
        anonFunc = returnsAnAnonymousFunction(); // Set up anonymous function before tests
    });

    it('returns an anonymous function', function() {
        assert.strictEqual(typeof anonFunc, 'function'); // Check if it's a function
    });

    it('calls the anonymous function', function() {
        anonFunc(); // This should log "This is an anonymous function"
    });
});
