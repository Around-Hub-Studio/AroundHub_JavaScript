
let num = 123;

switch (num){
    case 123 :
        console.log("값은 123");
    case 1234 : // break문이 없기 때문에 실행됨
        console.log("값은 1234");
    default :
        console.log("Case에 해당하는 값이 없습니다.");
}

console.log("----------------------------------------------------------------");
//----------------------------------------------------------------

num = 1234;

switch (num){
    case 123 :
        console.log("값은 123");
        break;
    case 1234 :
        console.log("값은 1234");
        break;
    default :
        console.log("Case에 해당하는 값이 없습니다.");
}

console.log("----------------------------------------------------------------");
//----------------------------------------------------------------

num = 321;

switch (num){
    case 123 :
        console.log("값은 123");
        break;
    case 1234 :
        console.log("값은 1234");
        break;
    default :
        console.log("Case에 해당하는 값이 없습니다.");
}