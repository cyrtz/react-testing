const aObj = { hello: { hi: 'world' } };
const bObj = { hello: { hi: 'world' } };

// 錯誤範例：比較物件內容時，不能使用toBe
test('get warning when compare objects by using toBe', () => {
    expect(aObj).toBe(bObj);
});

test('get warning when compare objects by using toEqual', () => {
    expect(aObj).toEqual(bObj);
});

// 稀疏陣列
test('check array sparseness', () => {
    // 錯誤範例：toEqual 會忽略稀疏陣列的差異
    expect([undefined, undefined, undefined, undefined, undefined, 1]).toEqual([, , , , , 1,]);

    // 正確範例：使用 toStrictEqual
    expect([undefined, undefined, undefined, undefined, undefined, 1]).not.toStrictEqual([, , , , , 1,]);
});

// undefined
test('check undefined in object', () => {
    // 錯誤範例：toEqual 會忽略 undefined 的差異
    expect({ a: undefined, b: 2 }).toEqual({ b: 2 });

    // 正確範例：使用 toStrictEqual
    expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 });
});

// 物件的屬性和值的類型
test('check object types', () => {
    class Obj {
        constructor() {
            this.hello = 'world';
        }
    }

    // 錯誤範例：toEqual 會忽略物件的類型差異
    expect(new Obj()).toEqual({ hello: 'world' });

    // 正確範例：使用 toStrictEqual
    expect(new Obj()).not.toStrictEqual({ hello: 'world' });
});

// 補充：
test.skip('get propery error message when using toBeNull', () => {
    expect(1).toBe(null);
    expect(1).toBeNull();
    expect(1).toBeDefined();
});