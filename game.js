(function () {

    // CANVAS
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

    canvas.width = 320;
    canvas.height = 240;
	canvas.style.position = 'absolute';

    document.body.appendChild(canvas);

    var scale = function () {
        canvas.style.width = (window.innerWidth) + 'px';
        canvas.style.height = (window.innerHeight) + 'px';
    };

    var cls = function () {

        ctx.fillStyle = 'balck';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    };

    scale();
    cls();

}
    ());
