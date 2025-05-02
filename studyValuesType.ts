// 변수의 데이터 타입 명시 
let stdId : number = 1111;
let stdname : string = "John Doe";
let stdage : number = 20;
let stdgender : string = "female";
let course : string = "Computer Science";
let completed : boolean= false;

// 함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a : number, b : number): number {     // 만약 return 값이 없다면 void로 명시
    return a + b;
}