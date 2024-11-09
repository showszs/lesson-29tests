import { weekFn } from "../main";   

let week = weekFn()

beforeEach( () => {
    week
})

describe( "Тестування weekFn", () => {
    test("1 = Понеділок", () => {
        const num = weekFn(1)
        expect(num).toBe('Понеділок')
    })

    test("2 = Вівторок", () => {
        const num = weekFn(2)
        expect(num).toBe('Вівторок')
    })

    test("3 = Середа", () => {
        const num = weekFn(3)
        expect(num).toBe('Середа')
    })

    test("4 = Четвер", () => {
        const num = weekFn(4)
        expect(num).toBe('Четвер')
    })

    test("5 = П\'ятниця", () => {
        const num = weekFn(5)
        expect(num).toBe('П\'ятниця')
    })

    test("6 = Субота", () => {
        const num = weekFn(6)
        expect(num).toBe('Субота')
    })

    test("7 = Неділя", () => {
        const num = weekFn(7)
        expect(num).toBe('Неділя')
    })

    test("str = null", () => {
        const num = weekFn()
        expect(num).toBe(null)
    })
})