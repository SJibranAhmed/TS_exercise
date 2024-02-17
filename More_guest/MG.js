var guest = ['Munaaf', 'Hasan', 'Talha'];
var new_guest = 'Moazzam';
guest.pop();
guest.push('Moazzam');
//console.log('I\'ve found bigger table')
guest.unshift('Waiz');
guest.splice(2, 0, 'Huzaifa');
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var i = guest_1[_i];
    console.log("Please " + i + " accept my invitation fot dinner");
}
