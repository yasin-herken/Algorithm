

function sameLengthComparison(s1: String, s2: String) {

}


function greaterThanComparison(s1: String, s2: String) {
    let map = new Map<any, any>();
    for (let i = 0; i < s1.length; i++) {   
        map.set(s1.charAt(i),i);
        if(map.has(s2.charAt(i))){
            
        }else{
            
        }
    }
}

let s1 = "pale";
let s2 = "ple";
s1.length === s2.length ? sameLengthComparison(s1, s2) : s1.length > s2.length ? greaterThanComparison(s1, s2) : greaterThanComparison(s2, s1);



export { };