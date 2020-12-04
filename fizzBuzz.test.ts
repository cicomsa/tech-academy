const fizzBuzz = (value: number) : string => {
    if (value % 15 === 0) {
        return "FizzBuzz";
    }

    if (value % 5 === 0) {
        return "Buzz";
    }

    if (value % 3 === 0) {
        return "Fizz";
    }

    return `${value}`;
}


describe('fizzBuzz', () => {
    it.each([3, 6])('should return "Fizz" if modular of 3 is 0', (value: number) => {
        const result: string = 'Fizz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([5, 10])('should return "Fizz" if modular of 5 is 0', (value: number) => {
        const result: string = 'Buzz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([15, 30])('should return "Fizz" if modular of 15 is 0', (value: number) => {
        const result: string = 'FizzBuzz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([1, 2])('should return %p if modular of 3 or 5 is not 0', (value: number) => {
        const result: string = `${value}`
        expect(fizzBuzz(value)).toBe(result);
    });
});
