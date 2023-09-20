import Calculo from "./calculo"

export default class bhaskara_positivo extends Calculo {
    public calcular(n1: number, n2: number, n3:number) {
        let resultado = 0

        const a = n1
        const b = n2
        const c = n3

        const delta = b*b - 4*a*c

        if (a == 0) {
            resultado = -1
        } else if (delta < 0) {
            resultado = -1
        } else {
            resultado = (+b + Math.sqrt(delta)) / (2*a)
        }

        return resultado;
    }
}