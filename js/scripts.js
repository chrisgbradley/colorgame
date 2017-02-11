var game = {
    el: document.getElementById("game"),
    color: document.getElementById("colorCode"),
    difficulty: findWithClass("selected", document.getElementById("difficulty-list").children),
    setDifficulty: function(difficulty) {
        var game = this.el;
        clearGame();
        /* a is the length of the desired array*/
        var a = difficulty+2;
        for(var i = 0; i < a; i++) {
            createRow(a);
        };


        function createRow(items) {
            var node = document.createElement("div");
            node.classList.add("dc-grid-row");


            //append items to row
            for(var j = 0; j < items; j++) {
                var subNode = document.createElement("div");
                subNode.classList.add("dc-grid-item", "square-1-"+items);
                node.appendChild(subNode);
            }
            //append row to game
            game.appendChild(node);
        };

        function clearGame() {
            while (game.hasChildNodes()) {
                game.removeChild(game.lastChild);
            };
        };
    },
    initListeners: function() {
        var e;

        e = document.querySelectorAll("ul li");
        for(var i = 0; i < e.length; i++){
            e[i].addEventListener("click", function() {
                for(var j = 0; j < e.length; j++) {
                    e[j].classList.remove("selected");
                };
                this.classList.add("selected");
                for(var j = 0; j < e.length; j++) {
                    if(e[j] === this) {
                        game.setDifficulty(j);
                    };
                };
            });
        };
    },
    newColors: function() {
        var tiles = document.querySelectorAll("#game .dc-grid-item");
        for(var i = 0; i < tiles.length; i++) {
            tiles[i].style.backgroundColor = rgbCode();
        };

        function rgbCode() {
            function rgb() {
                return Math.floor(Math.random() * 256);
            };
            return "rgb(" + rgb() + ", " + rgb() + ", " + rgb() + ")";
        };
    },
    setColor: function() {
        var tiles = document.querySelectorAll("#game .dc-grid-item");
        var r = Math.floor(Math.random() * tiles.length);
        this.color.textContent = tiles[r].style.backgroundColor;
    }
};




window.onload = function() {
    game.setDifficulty(game.difficulty);
    game.initListeners();
}


function findWithClass(cl, arr) {
    var e;
    for (var i = 0; i < arr.length; i++) {
        e = arr[i];
        if (e.classList.contains(cl)) {
            return i;
        }
    }
    return -1;
}
