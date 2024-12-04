const { capitalize, reverseString } = require('./functions');

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
    let result = reverseString('peanuts');
    expect(result).toBe("stunaep");
});