window.onload = function() {
    var game = document.getElementById("game");
    var difficulty = findWithClass("selected", document.getElementById("difficulty-list").children);
    initGame(game, difficulty);
}

/* FUNCTIONS: */
// initGame(game, difficulty);
// findWithClass(cl, arr);

var initGame = function(game, difficulty) {

};

function findWithClass(cl, arr) {
    var e;
    for(var i = 0; i < arr.length; i++) {
        e = arr[i];
        if(e.classList.contains(cl)) {
            return i;
        }
    }
    return -1;
}
