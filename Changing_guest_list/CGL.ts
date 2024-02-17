var guest : any = ['Munaaf', 'Hasan', 'Talha'];
let new_guest : string = 'Moazzam'
guest.pop()
guest.push(new_guest)

for (var i = 0; i < guest.length; i++) {
    console.log("Assalaamualaikum!\n \"" + guest[i] + "\" do you like to dinner with me tonight");
}