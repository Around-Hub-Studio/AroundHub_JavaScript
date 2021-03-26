
// 아래 if문을 삼항연산자로 바꾸는 예제입니다.

let a = "문자";
let b = "자문";

if(a===b){
    console.log("a와 b의 값이 같습니다.");
}else{
    console.log("a와 b의 값이 다릅니다.");
}

a = "문자";
b = "문자";

let text = "";

if(a===b){
    text = "a와 b의 값이 같습니다.";
}else{
    text = "a와 b의 값이 다릅니다.";
}

console.log(text);

//------------------------------------------

a = "문자";
b = "자문";

a===b ? console.log("a와 b의 값이 같습니다.") : console.log("a와 b의 값이 다릅니다.");


a = "문자";
b = "문자";

text = a===b ? "a와 b의 값이 같습니다." : "a와 b의 값이 다릅니다.";
console.log(text);