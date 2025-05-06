// 새로운 타입을 생성 또는 정의하는 것 : 타입 별칭 또는 alias라고 함.
// string 또는 number 타입을 가질 수 있는 새로운 타입을 생성
type strOrNum = string | number;

let numStr: strOrNum = 100; // number 타입
let item: number;

function convertToString(num: strOrNum): string {
  // item = numStr;   에러, 큰 범위의 타입을 작은 범위의 타입에 대입할 수 없음
    if (typeof num === "string") {
    item = 0;
    } else {
    item = num;
    }

    return String(num);
}

function convertToNumber(num: strOrNum): number {
    return Number(num);
}

console.log(convertToString(100)); // "100"
console.log(convertToNumber("100")); // "100"
