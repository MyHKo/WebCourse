class Burger {
    sauce = false
    lettuce = false
    cheese = false
    tomato = false
    patties = 1
    buns = 2

    constructor(burgerTemplate) {
        this.sauce = burgerTemplate.sauce
        this.lettuce = burgerTemplate.lettuce
        this.cheese = burgerTemplate.cheese
        this.tomato = burgerTemplate.tomato
        this.patties = burgerTemplate.patties
        this.buns = burgerTemplate.buns
    }
}

class BurgerBuilder {
    burger = {
        sauce: false,
        lettuce: false,
        cheese: false,
        tomato: false,
        patties: 1,
        buns: 2,
    }

    addSauce = () => { this.burger.sauce = true }
    addLettuce = () => { this.burger.lettuce = true }
    addTomato = () => { this.burger.tomato = true }
    addCheese = () => { this.burger.cheese = true }
    addPatties = (number) => { this.burger.patties = number }
    addBun = (number) => { this.burger.buns = number }
    getBurger = () => { return this.burger }
    resetBurger = () => { this.burger = {
        sauce: false,
        lettuce: false,
        cheese: false,
        tomato: false,
        patties: 1,
        buns: 2,
    } }
}

class BurgerDirector {
    builder = null

    constructor(builder) {
        this.builder = builder
    }

    createCheeseBurger() {
        this.builder.resetBurger()
        this.builder.addSauce()
        this.builder.addCheese()
        return this.builder.getBurger()
    }

    createDoubleBurger() {
        this.builder.resetBurger()
        this.builder.addSauce()
        this.builder.addCheese()
        this.builder.addLettuce()
        this.builder.addTomato()
        this.builder.addPatties(2)
        this.builder.addBun(3)
        return this.builder.getBurger()
    }
}

const director = new BurgerDirector(new BurgerBuilder())
const builder = new BurgerBuilder()
builder.addSauce()
builder.addCheese()
builder.addLettuce()
builder.addPatties(20)
const burger = new Burger(builder.getBurger())

console.log(director.createDoubleBurger())
console.log(director.createCheeseBurger())
console.log(burger)
