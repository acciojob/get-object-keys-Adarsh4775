//your JS code here. If required.
var student = {
    name: "John Doe"
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};