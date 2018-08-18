(function () {

    // CANVAS

    // creating canvas, and getting a reference to the
    // 2d drawing context
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

    // seting css via style api
    canvas.width = 320;
    canvas.height = 240;
    canvas.style.position = 'absolute';

    // append to body
    document.body.appendChild(canvas);

    // scale canvas helper
    var scale = function () {
        canvas.style.width = (window.innerWidth) + 'px';
        canvas.style.height = (window.innerHeight) + 'px';
    };

    // clear screen helper
    var cls = function () {

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    };

    // scale from first time, and do so on each resize
    scale();
    window.addEventListener('resize', function () {

        scale();

    })

    // cls for first time
    cls();

    // CARD CLASS
    var Card = function (opt) {

        this.attack = opt.attack;
        this.hpMax = opt.hpMax;
        this.hp = this.hpMax;

    };

    // DECK CLASS
    var Deck = function () {

        // faction index (player or ai deck)
        this.faction = opt.faction; // 0=player 1=ai

        // the cards in the deck
        this.cards = [];

    };

    // MATCH CLASS
    var Match = function () {

        this.turn = 0;
        this.curFact = 0; // current faction index

    };

    // STATE MACHINE
    var state = {

        currentState: 'init',
        init: function () {

        }

    };

    // RENDERER
    var render = {

        init: function () {

            ctx.fillText('init state',10,10);

        },

        // main render method
        main: function () {

            // clear the screen to black
            cls();

            // default fill style to white
            // after cls to back screen
            ctx.fillStyle = 'white';

            ctx.textBaseline = 'center';

            // run render method for current state
            this[state.currentState]();

        }

    };

    // EVENTS
    canvas.addEventListener('click', function (e) {

        //var bx = e.target.getBoundingClientRect();
        // x = e.clientX - bx.left,
        // y = e.clientY - bx.top;

        var x = e.clientX,
        y = e.clientY;

        console.log(x, y);
		
		render.main();

    });

}
    ());
