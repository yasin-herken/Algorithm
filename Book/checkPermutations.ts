
function checkPermutation(s1: string,s2: string): Boolean{
    if(s1.length!== s2.length){
        return false;
    }
    return s1.split("").sort().toString()===s2.split("").sort().toString()? true: false;
}

let answers: Boolean[] = [];
//Without whitespaces,
//English letters must be lowercase
answers.push(checkPermutation("god","dog"));
answers.push(checkPermutation("ab","bc"));

console.log(answers);
