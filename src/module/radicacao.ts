import Calculo from "./calculo";

export default class Radicacao extends Calculo{
    public calcular(n1:number, n2:number): number {
        return Math.pow(n1, 1/n2);
    }
}