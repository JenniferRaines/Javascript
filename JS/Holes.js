/*Created by jenniferraines on 3/25/15*/

var holes = {
    A: 1, B: 2, D: 1, P: 1, Q: 1, R: 1,
    a:1, b:1, c:0, d:1, e:1, g:1, p:1, q:1,
    0:2, 4:1, 6:1, 7:0, 8:2
};


function holeCount(str) {
    var total = 0;
    var chars = str.split('');
    chars.forEach(function (letter) {
        total += holes[letter] || 0;
    })
    return total
}
var tot2=0;
function getHoleCount (L){
    tot2 = tot2 + (holes[L] || 0);
    return "ok"
}

function holeCount2 (str) {
    var total = 0;
    var chars = str.split('');
    chars.forEach (getHoleCount());
    return tot2;
}

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
    tot2 = tot2 + (holes[element] || 0);
}

function runTest1(str){
    var chars = str.split('');
    chars.forEach(logArrayElements);
    return tot2;
}

function runTest2(str){
    var tot = 0;
    var chars = str.split('');
    for( var ix = 0; ix<chars.length-1; ix++){
        var holes = holes[ chars[ ix ] ];
        tot = tot + holes;
    }
    return tot;
}


















