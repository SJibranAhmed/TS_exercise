var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favorite_place = ['Macca', 'London', 'Egypt', 'Spain'];
console.log('original order');
console.log(favorite_place);
console.log(" \n alphabetic order");
console.log(__spreadArray([], favorite_place, true).sort());
console.log('\n original order again');
console.log(favorite_place);
console.log(" \n reverse alphabetic order");
console.log(__spreadArray([], favorite_place, true).sort().reverse());
console.log('\n back to original order');
console.log(favorite_place);
console.log('\n sorted array');
console.log(__spreadArray([], favorite_place, true).sort());
console.log('\n reverse array');
console.log(__spreadArray([], favorite_place, true).reverse());
