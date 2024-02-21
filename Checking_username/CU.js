var current_user = ['jibran', 'salman', 'usman'];
var new_user = ['fahad', 'uzair', 'usman'];
for (var i = 0; i < new_user.length; i++) {
    for (var j = 0; j < new_user.length; j++) {
        if (new_user[i] == current_user[j]) {
            console.log(new_user[i] + " you will need new username");
        }
        else {
            console.log(new_user[i] + "username is available");
        }
    }
}
