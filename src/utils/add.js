import { multiply } from './multiply.js'

export function add(a, b) {
    return a + b
}

export function addAndMultiply(a, b, c) {
    return multiply(add(a, b), c)
}