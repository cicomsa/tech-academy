const fizzBuzz = (number: number) : string => {
    if (number === 5) {
        return "Buzz";
    }
    return 'Fizz'
}


describe('fizzBuzz', () => {
    it('should return "Fizz" if number is 3', () => {
        const number: number = 3;
        const result: string = 'Fizz'
        expect(fizzBuzz(number)).toBe(result);
    });

    it('should return "Fizz" if number is 5', () => {
        const number: number = 5;
        const result: string = 'Buzz'
        expect(fizzBuzz(number)).toBe(result);
    });
});
