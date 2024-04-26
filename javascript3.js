// let salam=function(a,b,c,d,e){
//    let edediorta=(a+b+c+d+e)/5;
//    console.log(edediorta);
    
// }

// salam(10,20,30,40,50)


function edediorta(myArr) {
    let number = myArr.length;
    if (number === 0) {
        return 0;
    }
    let cem = myArr.reduce((a, b) => a + b, 0);
    let orta = cem / number;
    return orta;
}

let myArr = [10,20,30,40];
console.log(edediorta(myArr));