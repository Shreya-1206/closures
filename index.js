function x(){
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z =x();
console.log(z);

for(let i =0; i < 8; i++){
    console.log(`after few codes we will invoke z() ${i}`);
}

z();
