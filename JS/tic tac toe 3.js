/* Created by jenniferraines on 3/26/15 */

var compareThree = function (a,b,c) {
    if (a == b && b == c && (a || b || c != null)) {

        if (a == "X"){
            return "X Wins"
        }

        if (a == "O") {
            return "O Wins"
        }

    }

    else {
        return "Keep playing"
    }

}


var readBoard = function(A1,A2,A3,B1,B2,B3,C1,C2,C3) {
    var result = compareThree(A1, A2, A3);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(B1, B2, B3);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(C1, C2, C3);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(A1, B1, C1);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(A2, B2, C2);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(A3, B3, C3);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(A1, B2, C3);
    if (result != "Keep playing") {
        return result
    }

    var result = compareThree(A3, B2, C1);
    if (result != "Keep playing") {
        return result
    }

    return "Keep playing"
}