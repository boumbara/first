define([], function () {
    function _doSomething() {
       console.log("doSomething called.");
    }
    // Return an object that exposes two functions
    return {
        doSomething: _doSomething
    }
});
