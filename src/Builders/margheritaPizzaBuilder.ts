import { Pizza } from '../models/pizza';
import {PizzaBuilder} from './pizzaBuilder'

export class MargheritaPizzaBuilder implements PizzaBuilder{
    private size: string = '';
    private dough: string = '';
    private toppings: string[] = [];

    reset(): void{
        this.size = '';
        this.dough = '';
        this.toppings = [];
    }

    setSize(size: string): this{
        this.size = size;
        return this;
    }

    setDough(dough: string): this {
        this.dough = dough;
        return this;
    }

    addTopping(topping: string): this {
        this.toppings.push(topping);
        return this;
    }

    getResult(): Pizza {
        return new Pizza(this.size, this.dough, this.toppings);
    }

}