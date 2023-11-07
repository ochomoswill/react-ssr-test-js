import { add } from './add.js'

export function multiply(a, b) {
    return a * b
}

export function multiplyAndAdd(a, b, c) {
    return add(multiply(a, b), c)
}