const fizzBuzz = (number: number) : string => {
    return 'Fizz'
}


describe('fizzBuzz', () => {
    it('should return "Fizz" if number is 3', () => {
        const number: number = 3;
        const result: string = 'Fizz'
        expect(fizzBuzz(number)).toBe(result);
    });
});
