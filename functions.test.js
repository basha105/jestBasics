const { capitalize, reverseString, calculator } = require('./functions');

// Testing capitalize func
test('Capitalize peanut', () => {
    let result = capitalize("peanut");
    expect(result).toBe("Peanut");
});
test('Capitalize ronaldo', () => {
    let result = capitalize("ronaldo");
    expect(result).toBe("Ronaldo");
});
test('Capitalize ionBasha', ()=> {
    let result = capitalize('ionBasha');
    expect(result).toBe("IonBasha");
});

// Testing reverseString func

test('Reverse peanuts', () => {
    expect(reverseString("peanuts")).toBe("stunaep");
});

// Testing calculator

test('Calculate 2 + 2', () => {
    expect(calculator(2, '+', 2)).toBe(4);
});

test('Calculate 7 * 7', () => {
    expect(calculator(7, 'x', 7)).toBe(49);
});