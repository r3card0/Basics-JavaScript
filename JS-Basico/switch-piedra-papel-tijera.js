// con switch
// afirmaciones
var papel_gana_piedra = true;
var tijeras_gana_papel = true;
var piedra_gana_tijeras = true;
var juego = papel_gana_piedra || tijeras_gana_papel || piedra_gana_tijeras;
// opciones
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
// jugadores
var persona_1 = "piedra";
var persona_2 = "papel";



switch(juego) {
    case persona_1 == piedra && persona_2 == papel || persona_1 == papel && persona_2 == piedra:
        console.log(papel_gana_piedra + ": Papel le gana a piedra ✋ ");
        var ganador = function() {
            switch(persona_1 == papel || persona_2 == papel) {
                case persona_1 == papel:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == papel:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    case persona_1 == tijeras && persona_2 == papel || persona_1 == papel && persona_2 == tijeras:
        console.log(tijeras_gana_papel + ": Tijeras le gana a papel ✌️ ");
        var ganador = function() {
            switch(persona_1 == tijeras || persona_2 == tijeras) {
                case persona_1 == tijeras:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == tijeras:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    case persona_1 == piedra && persona_2 == tijeras || persona_1 == tijeras && persona_2 == piedra:
        console.log(piedra_gana_tijeras + ": Piedra le gana a tijeras 👊 ");
        var ganador = function() {
            switch(persona_1 == piedra || persona_2 == piedra) {
                case persona_1 == piedra:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == piedra:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    default:
        console.log("Empate, intenten de nuevo 😜 ")
}