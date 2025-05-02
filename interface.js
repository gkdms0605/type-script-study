var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 20060523;
        this.stdName = "Haeun lee";
        this.stdAge = 20;
        this.stdGender = 'female';
        this.course = "node.js";
        this.completed = false;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름: " + this.stdName);
    };
    return MyStudent;
}());
var AliceStudent = new MyStudent();
AliceStudent.setName("Alice Lee"); // 메서드 호출
// function getInfo(id : number) : Student {
//     return {        // 객체를 리턴할 때는 반드시 interface에 정의된 형태로 리턴해야 함 (값이 한 개라도 없다면 에러 발생)
//         stdId: id,
//         stdName: "John Doe",
//         // stdage: 20,
//         stdGender: 'female',
//         course: "Computer Science",
//         completed: false
//     };
// }
var std = {
    stdId: 1234,
    stdname: "Jane Doe",
    stdage: 22,
    stdgender: 'famale',
    course: "Mathematics",
    completed: true
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
// function Plus2(a : number, b? : number): number {     // 매개 변수에도 옵셔널 기호를 붙일 수 있음
//     return a + b;
// }
