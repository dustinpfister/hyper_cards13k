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

    // CLASES
    // Card Class
    var Card = function (opt) {

        this.hpMax = opt.hpMax; // maxhp
        this.att = opt.att; // attack
        this.def = opt.def; // defence

        // set current hp to max
        this.hp = this.hpMax;

    };

    // Decl Class
    var Deck = function () {

        // faction index (player or ai deck)
        this.faction = opt.faction; // 0=player 1=ai

        // the cards in the deck
        this.cards = [];

    };

    proto = Deck.prototype;

    // Deck.genDeck(faction)
    proto.genDeck = function (faction) {

        this.cards = [];

        var ci = 0,
        dSize = 10;
        while (ci < dSize) {

            this.cards.push({
                faction: faction,
                hpMax: Math.floor(Math.ramdom() * 5 + 15),
                att: Math.floor(Math.ramdom() * 7 + 3),
                def: Math.floor(Math.ramdom() * 3 + 2)
            });

            ci += 1;

        }

    }

    // Match Class
    var Match = function () {

        this.turn = 0;
        this.curFact = 0; // current faction index

    };

    // STATE MACHINE
    var state = {

        currentState: 'init',

        // initialization state
        init: function () {

            this.currentState = 'game';

        },

        game: function () {},

        update: function () {

            this[this.currentState]();

        }

    };

    // RENDERER
    var render = {

        // the should be a noop function, or even undefined in production
        init: function () {

            ctx.fillText('init state', 10, 10);

        },

        game: function () {

            ctx.fillText('game state', 10, 10);

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

    // EVENT(S)
    // call main update method of state machine
    // and render on each click/press
    canvas.addEventListener('click', function (e) {

        //var bx = e.target.getBoundingClientRect();
        // x = e.clientX - bx.left,
        // y = e.clientY - bx.top;

        // update, and render
        state.update(e.clientX, e.clientY);
        render.main();

    });

    // first call of main update, and render methods
    // by simulating a click at 0,0
    canvas.click(0, 0);

}
    ());
