class Employee3 {
    constructor
        (
            private _empName : string, 
            private _age : number, 
            private _empJob : string
        ) {
        }

    get empName(){
        return this._empName;
    }

    set empName(val : string){
        this._empName = val;
    }

    printEmp = () : void  =>{ 
        console.log(`${this._empName}의 나이는 ${this._age}세이고 직업은 ${this._empJob}입니다.`);
    }
};

let employee4 = new Employee2('kim', 30, '소프트웨어 개발자'); // 객체 생성

employee1.printEmp();
