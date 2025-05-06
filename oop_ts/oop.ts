class Employee {
    empName! : string;       // class 안에 정의된 함수: 멤버 변수 == 속성 == property
    age! : number;
    empJob! : string;

    printEmp = () : void  =>{        // 멤버 함수 == 메서드 == method
        console.log(`${this.empName}의 나이는 ${this.age}세이고 직업은 ${this.empJob}입니다.`);
    }
};

let employee1 = new Employee(); // 객체 생성
employee1.empName = 'kim';
employee1.age = 30;
employee1.empJob = 'developer';
employee1.printEmp();
