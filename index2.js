function x() {
    var a = 90;
    function y() {
        var b =80;
        function z() {
            console.log(a ,b)
        }
        b = 88;
        z();
    }
    y();
}
x();