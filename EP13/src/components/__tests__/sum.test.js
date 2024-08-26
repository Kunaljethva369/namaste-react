import {sum} from '../sum';

test("Sum function calculate the sum of givne argurement",()=>{
    const result = sum(3,5);
    // Assertion
    expect(result).toBe(8);
});