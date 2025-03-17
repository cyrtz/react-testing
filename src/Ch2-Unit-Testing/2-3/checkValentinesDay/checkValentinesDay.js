// 這樣設計會導致測試不容易：
// 因為我們要測試的是今天是否是情人節，但是函式裡面的日期是固定的，這樣我們就無法確認函式是否正確運作。
// const checkValentinesDay = () => {
//     const today = new Date();
//     const month = today.getMonth() + 1;
//     const day = today.getDate();
//     return month === 2 && day === 14 ? 'Happy Valentine\'s Day!' : 'Today is not Valentine\'s Day.';
// };

import { getToday } from './getToday';

// 這樣設計的好處：
// 這樣我們可以將今天的日期抽出來，就可以確認函式是否正確運作。
const checkValentinesDay = () => {
    const today = getToday();
    return today === '2/14' ? 'Happy Valentine\'s Day!' : 'Today is not Valentine\'s Day.';
};

export default checkValentinesDay;