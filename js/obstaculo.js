/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function(sprite, x, y, ancho, alto, potencia) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.potencia = potencia;

    // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
    // el jugador pierda vidas
    quitaVida = function(Obstaculo) {
        Jugador.perderVidas(Obstaculo.potencia);
        Obstaculo.potencia = 0;
        //jugador pierde vidas segun potencia del obstaculo
    };
}