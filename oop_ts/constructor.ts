class Employee2 {
    empName! : string;       
    age! : number;
    empJob! : string;

    constructor(empName : string, age : number, empJob : string) {
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }

    printEmp = () : void  =>{        // 멤버 함수 == 메서드 == method
        console.log(`${this.empName}의 나이는 ${this.age}세이고 직업은 ${this.empJob}입니다.`);
    }
};

let employee3 = new Employee2('kim', 30, '소프트웨어 개발자'); // 객체 생성

employee1.printEmp();
