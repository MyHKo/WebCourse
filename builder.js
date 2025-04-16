class Burger {
    sauce = false
    lettuce = false
    cheese = false
    tomato = false
    patties = 1
    buns = 2

    constructor(burgerBuilder) {
        this.sauce = burgerBuilder.sauce
        this.lettuce = burgerBuilder.lettuce
        this.cheese = burgerBuilder.cheese
        this.tomato = burgerBuilder.tomato
        this.patties = burgerBuilder.patties
        this.buns = burgerBuilder.buns
    }
}

class burgerBuilder {
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
    resetBurger = () => { this.burger.burger = {} }
}

