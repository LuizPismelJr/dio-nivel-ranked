let vitorias = 0

let derrotas = 0

let nivel = "Nivel"

let saldo = 0

function Main() {
    Arena()
    DefinirRanking()
    Shout()
}

function Arena() {

    for (var batalha = 0; batalha < 110; batalha++) {

        var decisao = Math.floor(Math.random() < 0.5)

        if (decisao) {
            vitorias++
        }
        else {
            derrotas++
        }
    }
}

function CalcularSaldo(_vitorias, _derrotas) {

    var calculo = _vitorias - _derrotas

    return calculo

}

function DefinirRanking() {

    saldo = CalcularSaldo(vitorias, derrotas)

    if (saldo < 10) {
        nivel = "Ferro"
    }
    else if (saldo > 10 && saldo <= 20) {
        nivel = "Bronze"
    }
    else if (saldo > 20 && saldo <= 50) {
        nivel = "Prata"
    }
    else if (saldo > 50 && saldo <= 80) {
        nivel = "Ouro"
    }
    else if (saldo > 80 && saldo <= 90) {
        nivel = "Diamante"
    }
    else if (saldo > 90 && saldo <= 100) {
        nivel = "Lendário"
    }
    else if (saldo >= 101) {
        nivel = "Imortal"
    }
}

function Shout() {
    console.log("O Herói tem saldo de " + saldo + " está no nível " + nivel)
}

Main()
