const icons = ["🪨", "✂️", "📋"];

let player1 = {name: "", victories: 0, selection: ""};

let player2 = {name: "", victories: 0, selection: ""};

function select_ramdon() {
    return icons[Math.floor(Math.random()*icons.length)]
};

function score() {
    document.write(`${player1.name} ${player1.victories} - ${player2.victories} ${player2.name} <br>`);
    document.write("<br>");
};

function result() {
    document.write(`${player1.name} ${player1.selection} VS. ${player2.selection} ${player2.name} <br>`);
};


// GAME
let nombre1 = prompt("Introduce tu nombre jugador 1");
player1.name = nombre1;

let nombre2 = prompt("Introduce tu nombre jugador 2");
player2.name = nombre2;

document.write("🚩 COMIENZA LA PARTIDA AL MEJOR DE 3 🚩<br>")
while (player1.victories < 2 && player2.victories < 2) {
    player1.selection = select_ramdon();
    player2.selection = select_ramdon();
    if(
        (player1.selection == "🪨" && player2.selection == "✂️") ||
        (player1.selection == "✂️" && player2.selection == "📋") ||
        (player1.selection == "📋" && player2.selection == "🪨")
    ){
        result();
        document.write(`${player1.name} gana la ronda!!! <br>`);
        player1.victories++;
        score();
    }else if(
        player1.selection === player2.selection
    ){
        result();
        document.write(`Empate <br>`);
        score();
    }else{
        result();
        document.write(`${player2.name} gana la ronda!!! <br>`);
        player2.victories++;
        score();
    };
};

if(player1.victories > player2.victories){
    document.write("GAME OVER <br>");
    document.write(`EL GANADOR ES ${player1.name}!!! <br>`);
}else{
    document.write("GAME OVER <br>");
    document.write(`EL GANADOR ES ${player2.name}!!! <br>`);
};




