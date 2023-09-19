import * as readline from 'node:readline';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question("Quais são seus números e a operação desejada?\n", (valor) => {
        let instrucoes = valor.split(" ")
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = instrucoes[2]
        if (instrucoes.length == 1){operacao = instrucoes[0]}
        console.log(`estas foram suas instruções ${instrucoes}\n`)
        console.log(operacao)
        switch (operacao) {
            case "somar":
                console.log("Somar")
                break
            case "subtrair":
                console.log("Subtrair")
                break
            case "multiplicacao":
                console.log("Multiplicacao")
                break
            case "divisao":
                console.log("Divisao")
                break
            case "Sair":
                break
        }
    })
}

iniciar()
