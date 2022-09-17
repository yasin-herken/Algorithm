// O(n) 
function isUnique(s) {
    let map = new Map();
    // Iterating string as a element and controlling map either has the element or not.
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], i);
        } else {
            return 0;
        }
    }
    return 1;
}
let answer = [];
answer.push(isUnique("papaer"));
answer.push(isUnique("api"));
answer.push(isUnique("aa"));
answer.push(isUnique("title"));
answer.push(isUnique("Title"));
console.log(answer);