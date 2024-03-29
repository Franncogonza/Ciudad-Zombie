/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
    /* el sprite contiene la ruta de la imagen
     */
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 5,

    // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,

    // y todo lo que haga falta para que cumpla con sus responsabilidades
    mover: function(movX, movY) {
        this.x = this.x + movX;
        this.y = this.y + movY;

        //cambia la imagen segun direccion del auto jugador
        if (movX < 0) {
            this.sprite = 'imagenes/auto_rojo_izquierda.png';
            Jugador.ancho = 30;
            Jugador.alto = 15;

        }
        if (movY < 0) {
            this.sprite = 'imagenes/auto_rojo_arriba.png';
            Jugador.ancho = 15;
            Jugador.alto = 30;

        }
        if (movX > 0) {
            this.sprite = 'imagenes/auto_rojo_derecha.png';
            Jugador.ancho = 30;
            Jugador.alto = 15;
        }
        if (movY > 0) {
            this.sprite = 'imagenes/auto_rojo_abajo.png';
            Jugador.ancho = 15;
            Jugador.alto = 30;

        }

    },

    perderVidas: function(vidaperdida) {
        this.vidas = this.vidas - vidaperdida;
        return this.vidas;
    },
};