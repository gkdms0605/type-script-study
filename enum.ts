// 열거형 데이터 타입 enum (사용자 정의 타입)
enum GenderTypeNumber{  
    Male,   // 값을 정의하지 않으면 0부터 시작
    Female
}

enum GenderTypeString{
    Male = 'Male',
    Female = 'Female'
}

interface Dog {
    name: string;
    age: number;
    gender: GenderTypeNumber;
}

class myDog implements Dog {
    name =  "ppoppi";
    age = 5;
    gender = GenderTypeNumber.Female;
}