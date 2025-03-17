import checkValentinesDay from "./checkValentinesDay";
import { getToday } from "./getToday";

// describe('checkValentinesDay', () => {
//     it ('today should be Valentine\'s Day', () => {
//         expect(checkValentinesDay()).toBe('Happy Valentine\'s Day!');
//     });
// });


// 一次只測試一個功能
jest.mock('./getToday', () => ({
    getToday: jest.fn(),
}));

describe('checkValentinesDay', () => {
    // 假設今天是2月3日，則會判斷今天不是情人節
    it('2/3 should not be Valentine\'s Day', () => {
        getToday.mockReturnValue('2/3');
        expect(checkValentinesDay()).toBe('Today is not Valentine\'s Day.');
    });

    // 假設今天是2月14日，則會判斷今天是情人節
    it('2/14 should be Valentine\'s Day', () => {
        getToday.mockReturnValue('2/14');
        expect(checkValentinesDay()).toBe('Happy Valentine\'s Day!');
    });
});