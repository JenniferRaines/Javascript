function reverse(str){
    var backwards = '';
    for (var i = str.length - 1; i >= 0; i--)
        backwards += str[i];
    return backwards;
}

function test(A,B){
    if (A == B) {
        return "=="
    }
    else {
        return "nope"
        }

}

function runTest () {
    var A = 1;
    var B = 1;
    return test(A,B);
}

