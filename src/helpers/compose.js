/**
 * Composition of function
 * It makes from "a(b(c(value)))" => "compose (a, b, c)(value)"
 * 
 * @param  {...any} funcs - helper functions
 * @param {JSX.Element} component
 * @returns {Function} 
 */

const compose = (...funcs) => (component) => {
    return funcs.reduceRight(
        (prevResult, f) => f(prevResult), component // comp is initial value for prevResult
    );
}

export default compose;