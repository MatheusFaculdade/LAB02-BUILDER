export class Pizza {
    private size: string;
    private dough: string;
    private toppings: string[];

    constructor(size: string, dough: string, toppings: string[]) {
        this.size = size;
        this.dough = dough;
        this.toppings = toppings;
    }

    display(): void {
        console.log(`Pizza de ${this.size}, com massa ${this.dough} e os seguintes ingredientes: ${this.toppings.join(", ")}.`);
    }
}