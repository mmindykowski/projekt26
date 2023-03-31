let text1 = 'Uwielbiam JavaScript';


console.log(text1.length)

let text2 = 'Jestem świetnym programistą';


// console.log(text2.length)

function dłuższy (x,y) {
    if (x.length < y.length) {
        return y;
    }   else if (x.length > y.length) {
        return x;
    }   else {
        return "Napisy są równe";
    }
}

console.log(dłuższy(text1, text2));