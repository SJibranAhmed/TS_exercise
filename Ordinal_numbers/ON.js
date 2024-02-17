var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_num_1 = ordinal_num; _i < ordinal_num_1.length; _i++) {
    var i = ordinal_num_1[_i];
    if (i == 1) {
        console.log(i + 'st');
    }
    else if (i == 2) {
        console.log(i + 'nd');
    }
    else if (i == 3) {
        console.log(i + 'rd');
    }
    else {
        console.log(i + 'th');
    }
}
