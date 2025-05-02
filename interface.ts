// 인터페이스에 대해 공부해보자
interface Student { // js에선 나타나지 않음. (interfaces는 js로 컴파일되지 않음)
    stdId? : number,
    stdName? : string,
    stdAge? : number,       // ?를 붙이면 선택적 메서드으로 정의 가능, 값이 없어도 에러가 나지 않음 (옵셔널 기호)
    stdGender? : string,
    course? : string,
    completed? : boolean,
    setName(name : string) : void, // 메서드 정의 가능
    // getName : () => string
}

class MyStudent implements Student{
    stdId = 20060523;
    stdName = "Haeun lee";
    stdAge = 20;
    stdGender = 'female';
    course = "node.js";
    completed = false;

    setName(name: string): void {
        this.stdName = name;
        console.log("이름: " + this.stdName);
    }
}

const AliceStudent = new MyStudent();
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

let std = {
    stdId: 1234,
    stdname: "Jane Doe",
    stdage: 22,
    stdgender: 'famale',
    course: "Mathematics",
    completed: true
}

function setInfo(student: Student) : void{
    console.log(student);
}

// setInfo(std);

// console.log(getInfo(5678));

// function Plus2(a : number, b? : number): number {     // 매개 변수에도 옵셔널 기호를 붙일 수 있음
//     return a + b;
// }