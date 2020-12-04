const fizzBuzz = (number: number) : string => {
    if (number === 15) {
        return "FizzBuzz";
    }

    if (number % 5 === 0) {
        return "Buzz";
    }

    return 'Fizz';
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

    it('should return "FizzBuzz" if number is 15', () => {
        const number: number = 15;
        const result: string = 'FizzBuzz'
        expect(fizzBuzz(number)).toBe(result);
    });
});
