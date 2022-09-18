

function palindromePermutations(s1 : String): Boolean{
    const map = new Map<any,any>();
    s1 = s1.toLocaleLowerCase().replace(" ","");
    for(let i = 0;i<s1.length;i++){
        if(map.has(s1.charAt(i))){
            map.set(s1.charAt(i),map.get(s1.charAt(i))+1);
        }else{
            map.set(s1.charAt(i),1);
        }
    }
    let evenCount = 0;
    let oddCount = 0;
    for (const [key, value] of map.entries()) {
        if(value%2===0){
            evenCount++;
        }else{
            oddCount++;
        }
      }
    return oddCount>1?false:true;
}

let answers: Boolean[] = [];
//Without whitespaces,
//English letters must be lowercase
answers.push(palindromePermutations("Tact Coa"));
answers.push(palindromePermutations("rabar"));
answers.push(palindromePermutations("rakaar"));
answers.push(palindromePermutations("test"));
answers.push(palindromePermutations("aa"));
answers.push(palindromePermutations("a"));
answers.push(palindromePermutations("carerec"));
console.log(answers);
export {};