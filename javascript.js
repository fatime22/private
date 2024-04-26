function Polindrom(str) {
    return str === str.split('').reverse().join('');

}

let str = "level";
if (Polindrom(str)) {
    console.log("Bu soz polindromdur.");
} else {
    console.log("Bu soz polindrom deyildir.");
}

