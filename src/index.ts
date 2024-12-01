import { MargheritaPizzaBuilder } from "./Builders/margheritaPizzaBuilder";
import { PepperoniPizzaBuilder } from "./Builders/pepperoniPizzaBuilder";
import { PizzaDirector } from "./models/pizzaDirector";

function main() {
//utilização do Builder para Margherita
const margheritaBuilder = new MargheritaPizzaBuilder();
const pizzaDirector = new PizzaDirector(margheritaBuilder);
const margherita = pizzaDirector.createMargheritaPizza();
margherita.display();

//utilização do Builder para Pepperoni
const pepperoniBuilder = new PepperoniPizzaBuilder();
pizzaDirector.setBuilder(pepperoniBuilder);
const pepperoni = pizzaDirector.createPepperoniPizza();
pepperoni.display();

//pizza personalizada
const customPizzaBuilder = new MargheritaPizzaBuilder();
const customPizza = customPizzaBuilder
    .setSize("grande")
    .setDough("recheada")
    .addTopping("Queijo")
    .addTopping("Catupity")
    .addTopping("Presunto")
    .getResult();
customPizza.display(); 
}

main();