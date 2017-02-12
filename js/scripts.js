var game = {
    el: document.getElementById("game"),
    color: document.getElementById("colorCode"),
    tiles: document.querySelectorAll("#game .dc-grid-item"),
    difficulty: findWithClass("selected", document.getElementById("difficulty-list").children),
    setDifficulty: function(difficulty) {
        var game = this.el;
        clearGame();
        /* a is the length of the desired array*/
        var a = difficulty + 2;
        for (var i = 0; i < a; i++) {
            createRow(a);
        };


        function createRow(items) {
            var node = document.createElement("div");
            node.classList.add("dc-grid-row");


            //append items to row
            for (var j = 0; j < items; j++) {
                var subNode = document.createElement("div");
                subNode.classList.add("dc-grid-item", "square-1-" + items);
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

        this.updateGame();
    },
    initButtonListeners: function() {
        var e;

        e = document.querySelectorAll("#difficulty-list li");
        for (var i = 0; i < e.length; i++) {
            e[i].addEventListener("click", function() {
                for (var j = 0; j < e.length; j++) {
                    e[j].classList.remove("selected");
                };
                this.classList.add("selected");
                for (var j = 0; j < e.length; j++) {
                    if (e[j] === this) {
                        game.setDifficulty(j);
                        game.newGame();
                    };
                };
            });
        };
    },
    initTileListeners: function() {
        for(var i = 0; i < this.tiles.length; i++) {
            this.tiles[i].addEventListener("click", function() {
                if(this.style.backgroundColor === game.color.textContent) {
                    game.gameWon();
                } else {
                    this.classList.add("hidden");
                }
            });
        }
    },
    newColors: function() {
        for (var i = 0; i < this.tiles.length; i++) {
            this.tiles[i].style.backgroundColor = rgbCode();
        };

        function rgbCode() {
            function rgb() {
                return Math.floor(Math.random() * 256);
            };
            return "rgb(" + rgb() + ", " + rgb() + ", " + rgb() + ")";
        };
    },
    setColor: function() {
        var r = Math.floor(Math.random() * this.tiles.length);
        this.color.textContent = this.tiles[r].style.backgroundColor;
    },
    gameWon: function() {
        for(var i = 0; i < this.tiles.length; i++) {
            this.tiles[i].classList.remove("hidden");
            this.tiles[i].style.backgroundColor = game.color.textContent;
            document.getElementById("top")
        };
    },
    newGame: function() {
        this.newColors();
        this.setColor();
    },
    updateGame: function() {
        this.color = document.getElementById("colorCode");
        this.tiles = document.querySelectorAll("#game .dc-grid-item");
        this.initTileListeners();
    }
};




window.onload = function() {
    game.setDifficulty(game.difficulty);
    game.initButtonListeners();
    game.initTileListeners();
    game.newGame();
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
