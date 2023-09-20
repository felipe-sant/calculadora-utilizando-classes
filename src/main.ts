import * as readline from 'node:readline';
import Soma from './module/soma';
import Subtracao from './module/subtracao';
import Multiplicacao from './module/multiplicacao';
import Divisao from './module/divisao';
import Potencia from './module/potencia';
import Radicacao from './module/radicacao';
import bhaskara_positivo from './module/bhaskara_positivo';
import bhaskara_negativo from './module/bhaskara_negativo';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question("Quais são seus números e a operação desejada?\n", (valor) => {
        let instrucoes = valor.split(" ")
        let n1 = Number(instrucoes[0])
        let n2 = Number("")
        let n3 = Number(instrucoes[2])
        let operacao = ""

        // escolha de bhaskara ou não

        if (Number(instrucoes[1]) > 0 || Number(instrucoes[1]) < 0 || Number(instrucoes[1]) == 0) {
            n2 = Number(instrucoes[1])
            operacao = "bhaskara"
            console.log(`estas foram suas instruções ${instrucoes[1]}, voce esta escolhendo baskara, sua operação sera: ${operacao}\n`)
        } else {    
            operacao = instrucoes[1]
            console.log(`estas foram suas instruções ${instrucoes}, voce esta escolhendo normal, sua operação sera: ${operacao}\n`)
        }
        
        switch (operacao) {
            case "+":
                let soma_resultado = new Soma()
                console.log(soma_resultado.calcular(n1, n3))
                break
            case "-":
                let subtracao_resultado = new Subtracao()
                console.log(subtracao_resultado.calcular(n1, n3))
                break
            case "*":
                let multiplicacao_resultado = new Multiplicacao()
                console.log(multiplicacao_resultado.calcular(n1, n3))
                break
            case "/":
                let divisao_resultado = new Divisao()
                console.log(divisao_resultado.calcular(n1, n3))
                break
            case "**":
                let potencia_resultado = new Potencia()
                console.log(potencia_resultado.calcular(n1, n3))
                break
            case "//":
                let raiz_resultado = new Radicacao()
                console.log(raiz_resultado.calcular(n1, n3))
                break
            case "bhaskara":
                let bhaskara_x1 = new bhaskara_negativo()
                let bhaskara_x2 = new bhaskara_positivo()
                console.log(`x1: ${bhaskara_x1.calcular(n1, n2, n3)}\nx2: ${bhaskara_x2.calcular(n1, n2, n3)}`)
        }
    })
}

iniciar()
