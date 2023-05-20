//1
let con = [];
for (let i = 0; i <= 10; i++) {
    con.push(i)
}
console.log(con)
//2
for (let i = 20; i >= 0; i--){
    console.log(i)
}
//3
// let colors = prompt('Choise color!(red, yellow, green)')
// if (colors === 'red') {
//     alert('STOP')
// }else if (colors === 'yellow') {
//     alert('READY')
// }else if (colors === 'green') {
//     alert('GO')
// }else {
//     alert("пожалалуйста вводите цвета")
// }

let colors = prompt('Choise color!(red, yellow, green)')
switch (colors) {
    case 'red':
        alert('STOP')
        break
    case 'yellow':
        alert('ready')
        break
    case 'green':
        alert('go')
        break
    default:
        alert("пожалалуйста вводите цвета")
}




