
function URLify(s1: String){
    let answer: String[] = [];
    for(let i=0;i<s1.trim().length;i++){
        if(s1.charAt(i)===" "){
            answer.push("%20");
        }else{
            answer.push(s1.charAt(i));
        }
    }
    return answer.join("").toString();
}
const answers: String[] = [];

answers.push(URLify("Mr John Smith   "))
answers.push(URLify("Yasin Herken"))
console.log(answers);
export {};