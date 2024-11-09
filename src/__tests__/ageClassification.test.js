
import { ageClassification } from '../main'

let age = ageClassification()

beforeEach( () => {
    age 
})

describe("Тестування ageClassification", () => {
test("num < 0 = null", () => {
    const result = ageClassification(-1)
    expect(result).toBe(null);
})

test( "num <= 24 = Дитинство", () => {
    const result = ageClassification (24)
    expect(result).toBe('Дитинство')
})

test( "num <= 44 = Молодість", () => {
    const result = ageClassification (44)
    expect(result).toBe('Молодість')
})

test( "num <= 65 = Зрілість", () => {
    const result = ageClassification (65)
    expect(result).toBe('Зрілість')
})

test( "num <= 75 = Старість", () => {
    const result = ageClassification (75)
    expect(result).toBe('Старість')
})

test( "num <= 90 = Довголіття", () => {
    const result = ageClassification (90)
    expect(result).toBe('Довголіття')
})

test( "num <= 122 = Рекорд", () => {
    const result = ageClassification (122)
    expect(result).toBe('Рекорд')
})

test( "num > 122 = null", () => {
    const result = ageClassification (124)
    expect(result).toBe(null)
})
})



