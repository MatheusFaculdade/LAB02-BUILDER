import { PizzaBuilder } from "../Builders/pizzaBuilder";
import { Pizza } from "./pizza";

export class PizzaDirector {
    private builder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.builder = builder;
    }

    setBuilder(builder: PizzaBuilder): void {
        this.builder = builder;
    }

    createMargheritaPizza(): Pizza {
        this.builder.reset();
        return this.builder
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão")
            .getResult();
    }

    createPepperoniPizza(): Pizza {
        this.builder.reset();
        return this.builder
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni")
            .getResult();
    }
}
