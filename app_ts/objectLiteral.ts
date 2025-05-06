// 객체 리터럴
interface Cat {
    name: string;
    age: number;
    gender: "Male" | "Female";
}

class myCat implements Cat {
    name =  "ppoppi";
    age = 5;
    gender : "Male" | "Female" = 'Male';       // 리터럴은 반드시 데이터가 일치해야 함
}

const user : {name: string, age: number} = {
    name: 'john',
    age: 25
};

