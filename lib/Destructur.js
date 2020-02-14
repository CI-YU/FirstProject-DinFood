// //基本用法
// const [a, b] = [1, 2] //a=1, b=2

// //先宣告後指定值，要用let才行
// let a, b
// [a, b] = [1, 2]

// // 略過某些值
// const [a, , b] = [1, 2, 3] // a=1, b=3

// // 其餘運算
// const [a, ...b] = [1, 2, 3] //a=1, b=[2,3]

// // 失敗保護
// const [, , , a, b] = [1, 2, 3] // a=undefined, b=undefined

// // 交換值
// const a = 1, b = 2;
// [b, a] = [a, b] //a=2, b=1

// // 多維複雜陣列
// const [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]

// 字串
const str = "hello";
const [a, b, c, d, e] = str 
console.log(`${a}${b}${c}${d}${e}`);
