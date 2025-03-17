import addNumbers from './addNumbers';

describe('addNumbers', () => {
    //輸入1和2，結果等於3
    it('should return 3 when 1 + 2', () => {
        expect(addNumbers(1, 2)).toBe(3);
    });
    //輸入0.1和0.2，結果等於0.3
    it('should return 0.3 when 0.1 + 0.2', () => {
        expect(addNumbers(0.1, 0.2)).toBe(0.3);
    });
});