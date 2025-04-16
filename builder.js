class burger {
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