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
    it.each([3, 6])('should return "Fizz" when the value is a multiple of 3', (value: number) => {
        const result: string = 'Fizz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([5, 10])('should return "Buzz" when the value is a multiple of 5', (value: number) => {
        const result: string = 'Buzz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([15, 30])('should return "FizzBuzz" when the value is a multiple of 15', (value: number) => {
        const result: string = 'FizzBuzz'
        expect(fizzBuzz(value)).toBe(result);
    });

    it.each([1, 2])('should return %p when the value is NOT a multiple of 3, 5 or 15', (value: number) => {
        const result: string = `${value}`
        expect(fizzBuzz(value)).toBe(result);
    });
});

function fizzBuzzList(numbers: number[]) {
    return numbers.map((value) => {
        return fizzBuzz(value);
    }).join();
}

describe('fizzBuzzList', () => {
    it('should return Fizz for [3]', () => {
        expect(fizzBuzzList([3])).toBe('Fizz');
    })
});
