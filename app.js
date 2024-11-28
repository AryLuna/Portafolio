var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Web Front-end Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('El Front-end es nuestra magia; el código, nuestro arte.')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('<strong>Talento.</strong>')
    .pauseFor(2500)
    .start();