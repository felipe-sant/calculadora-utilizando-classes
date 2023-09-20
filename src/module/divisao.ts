import Calculo from "./calculo";

export default class Divisao extends Calculo {
    public calcular(n1:number, n2:number): number {
        return n1 / n2;
    }
}