var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Ingredients : ');
    items.forEach(function (i) {
        console.log('- ' + i);
    });
    console.log('Enjoy your sandwich \n \n');
};
//calling functions
sandwich('tikka', 'cheese');
sandwich('malai', 'karela');
sandwich('chicken', 'beef');
