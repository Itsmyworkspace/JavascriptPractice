// JavaScript Interview Questions and Answers

// 1. Reverse a string
// input: 
// "javascript"
// output:
// "tpircsavaj"
let q1 = "javascript";
let reversedString = q1.split("").reverse().join("");
console.log("a1: ", reversedString); // Output: "tpircsavaj"

let reversedString2 = "";
for(let i=q1.length-1;i>=0;i--){
    reversedString2 += q1[i];
}
console.log("a1: ", reversedString2); // Output: "tpircsavaj"

// 2. Check whether string is palindrome or not
// input: 
// "madam"
// output:
// true
let q2 = "madam";
let isPalindrome = q2 === q2.split("").reverse().join("");
console.log("a2: ", isPalindrome); // Output: true

// 3. Count vowels in a string
let q3 = "vineeth";
let vowels = "aeiou";
let count = 0;
for(let x= 0;x<q3.length-1;x++){
    if(vowels.includes(q3[x])){
        count++;
    }
}
console.log("a3: ",count);

// 4. Count consonants
count = 0;
let q4 = "vineeth";
for(let x=0;x<q4.length;x++){
    if(!vowels.includes(q4[x])){
        count++;
    }
}
console.log("a4: ",count);

// 5. Count characters in a string
count = 0;
let map = new Map();
let q5 = "vineeth";
for(let i=0;i<q5.length;i++){
    if(map.has(q5[i])){
        map.set(q5[i],map.get(q5[i])+1);
    }
    map.set(q5[i],1);
}
console.log("a5: ",map);

// 6. Find the first non-repeating character
let q6 = "swiss";
const cnt = {};
for (const char of q6) {
    cnt[char] = (cnt[char] || 0) + 1;
}

for (const char of q6) {
    if (cnt[char] === 1) {
      console.log("a6: ",char);
      break;
    }
}

// 7. Find the first repeating character
let q7 = "swiss";
const cnt2 = {};
for (const char of q6) {
    cnt2[char] = (cnt[char] || 0) + 1;
}

for (const char of q6) {
    if (cnt2[char] > 1) {
      console.log("a7: ",char);
      break;
    }
}

// 8. Remove duplicate characters
let q8 = "programming";
let a8 = [...new Set(q8)].join('');
console.log("a8: ",a8);

// 9. Check whether two strings are anagrams
let str1 = "silent";
let str2 = "listen";
let a9 = str1.split("").sort().join("") == str2.split("").sort().join("");
console.log("a9: ",a9);

// 10. Count words in a sentence
let q10 = "JavaScript is very powerful";
console.log("a10: ");
q10.split(" ").forEach(i=>console.log(i))

// 11. Reverse words in a sentence
let q11 = "JavaScript is very powerful";
let a11 = q11.split(" ").reverse().join(" ");
console.log("a11: ",a11);

// 12. Reverse each word
let q12 = "JavaScript is very powerful";
let a12 = q12.split(" ").map(word => [...word].reverse().join("")).reverse().join(" ");
console.log("a12: ",a12);

// 13. Find the longest word
let q13 = "JavaScript is very powerful";
let a13 = q13.split(" ").reduce((longest, word) =>
      word.length > longest.length ? word : longest
    , "");
console.log("a13: ",a13);

// 14. Find the shortest word
let q14 = "JavaScript is very powerful";
let a14 = q14.split(" ").reduce((word, shortest) =>
      word.length <= shortest.length ? word : shortest);
console.log("a14: ",a14);

// 15. Capitalize the first letter in each word in sentence
let q15 = "JavaScript is very powerful";
let a15 = q15.split(" ").map(i=>i.charAt(0).toUpperCase).join(" ");
console.log("a15: ", a15);

// 16. Capitalize every word
let q16 = "hello javascript world";
let a16 = q16.split(" ").map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" ");
console.log("a16: ", a16);

// 17. Remove spaces
let q17 = "hello world javascript";
let a17 = q17.replace(/\s/g, "");
console.log("a17: ", a17);

// 18. Replace spaces with hyphens
let q18 = "hello javascript world";
let a18 = q18.replace(/\s/g, "-");
console.log("a18: ", a18);

// 19. Check whether a string contains only digits
let q19 = "123456";
let a19 = /^\d+$/.test(q19);
console.log("a19: ", a19);

// 20. Check whether a string contains only alphabets
let q20 = "JavaScript";
let a20 = /^[A-Za-z]+$/.test(q20);
console.log("a20: ", a20);

// 21. Count occurrence of a character
let q21 = "programming";
let a21 = q21.split("").filter(i => i === "g").length;
console.log("a21: ", a21);

// 22. Remove a specific character
let q22 = "banana";
let a22 = q22.replace(/a/g, "");
console.log("a22: ", a22);

// 23. Find duplicate characters
let q23 = "programming";
let a23 = [...new Set(q23.split("").filter(i => q23.indexOf(i) !== q23.lastIndexOf(i)))];
console.log("a23: ", a23);

// 24. Find unique characters
let q24 = "programming";
let a24 = [...new Set(q24.split("").filter(i => q24.indexOf(i) === q24.lastIndexOf(i)))];
console.log("a24: ", a24);

// 25. Check palindrome ignoring spaces
let q25 = "nurses run";
let a25 = q25.replace(/\s/g, "").toLowerCase() === q25.replace(/\s/g, "").toLowerCase().split("").reverse().join("");
console.log("a25: ", a25);

// 26. Check palindrome ignoring case
let q26 = "Madam";
let a26 = q26.toLowerCase() === q26.toLowerCase().split("").reverse().join("");
console.log("a26: ", a26);

// 27. Find the longest substring without repeating characters
let q27 = "abcabcbb";
let a27 = "";
let temp27 = "";

for (let i of q27) {
    if (temp27.includes(i)) {
        temp27 = temp27.slice(temp27.indexOf(i) + 1);
    }
    temp27 += i;
    if (temp27.length > a27.length) {
        a27 = temp27;
    }
}
console.log("a27: ", a27);

// 28. Find the longest palindromic substring
let q28 = "babad";
let a28 = "";

for (let i = 0; i < q28.length; i++) {
    for (let j = i + 1; j <= q28.length; j++) {
        let temp28 = q28.slice(i, j);
        if (temp28 === temp28.split("").reverse().join("") && temp28.length > a28.length) {
            a28 = temp28;
        }
    }
}
console.log("a28: ", a28);

// 29. Compress a string
let q29 = "aaabbcccc";
let a29 = "";
let count29 = 1;

for (let i = 0; i < q29.length; i++) {
    if (q29[i] === q29[i + 1]) {
        count29++;
    } else {
        a29 += q29[i] + count29;
        count29 = 1;
    }
}
console.log("a29: ", a29);

// 30. Check whether one string is rotation of another
let q30 = ["abcd", "cdab"];
let a30 = q30[0].length === q30[1].length && (q30[0] + q30[0]).includes(q30[1]);
console.log("a30: ", a30);

// 31. Find the largest number
let q31 = [10, 5, 20, 8];
let a31 = Math.max(...q31);
console.log("a31: ", a31);

// 32. Find the smallest number
let q32 = [10, 5, 20, 8];
let a32 = Math.min(...q32);
console.log("a32: ", a32);

// 33. Find the second largest number
let q33 = [10, 5, 20, 8];
let a33 = [...new Set(q33)].sort((a, b) => b - a)[1];
console.log("a33: ", a33);

// 34. Find the second smallest number
let q34 = [10, 5, 20, 8];
let a34 = [...new Set(q34)].sort((a, b) => a - b)[1];
console.log("a34: ", a34);

// 35. Sum all numbers
let q35 = [1, 2, 3, 4, 5];
let a35 = q35.reduce((sum, i) => sum + i, 0);
console.log("a35: ", a35);

// 36. Calculate average
let q36 = [10, 20, 30];
let a36 = q36.reduce((sum, i) => sum + i, 0) / q36.length;
console.log("a36: ", a36);

// 37. Count even numbers
let q37 = [1, 2, 3, 4, 6, 7];
let a37 = q37.filter(i => i % 2 === 0).length;
console.log("a37: ", a37);

// 38. Count odd numbers
let q38 = [1, 2, 3, 4, 6, 7];
let a38 = q38.filter(i => i % 2 !== 0).length;
console.log("a38: ", a38);

// 39. Find even numbers
let q39 = [1, 2, 3, 4, 5, 6];
let a39 = q39.filter(i => i % 2 === 0);
console.log("a39: ", a39);

// 40. Find odd numbers
let q40 = [1, 2, 3, 4, 5, 6];
let a40 = q40.filter(i => i % 2 !== 0);
console.log("a40: ", a40);

// 41. Remove duplicates
let q41 = [1, 2, 2, 3, 3, 4];
let a41 = [...new Set(q41)];
console.log("a41: ", a41);

// 42. Find unique elements
let q42 = [1, 2, 2, 3, 4, 4];
let a42 = q42.filter(i => q42.indexOf(i) === q42.lastIndexOf(i));
console.log("a42: ", a42);

// 43. Find duplicate elements
let q43 = [1, 2, 2, 3, 4, 4];
let a43 = [...new Set(q43.filter(i => q43.indexOf(i) !== q43.lastIndexOf(i)))];
console.log("a43: ", a43);

// 44. Reverse an array
let q44 = [1, 2, 3, 4];
let a44 = [...q44].reverse();
console.log("a44: ", a44);

// 45. Sort ascending
let q45 = [5, 2, 8, 1];
let a45 = [...q45].sort((a, b) => a - b);
console.log("a45: ", a45);

// 46. Sort descending
let q46 = [5, 2, 8, 1];
let a46 = [...q46].sort((a, b) => b - a);
console.log("a46: ", a46);

// 47. Find index of an element
let q47 = [10, 20, 30];
let a47 = q47.indexOf(20);
console.log("a47: ", a47);

// 48. Check whether an element exists
let q48 = [10, 20, 30];
let a48 = q48.includes(20);
console.log("a48: ", a48);

// 49. Find intersection of two arrays
let q49 = [[1, 2, 3, 4], [3, 4, 5, 6]];
let a49 = q49[0].filter(i => q49[1].includes(i));
console.log("a49: ", a49);

// 50. Find union of two arrays
let q50 = [[1, 2, 3], [3, 4, 5]];
let a50 = [...new Set([...q50[0], ...q50[1]])];
console.log("a50: ", a50);

// 51. Find array difference
let q51 = [[1, 2, 3, 4], [2, 4]];
let a51 = q51[0].filter(i => !q51[1].includes(i));
console.log("a51: ", a51);

// 52. Find missing number
let q52 = [1, 2, 3, 5];
let a52 = Array.from({ length: q52.length + 1 }, (_, i) => i + 1)
    .find(i => !q52.includes(i));
console.log("a52: ", a52);

// 53. Find multiple missing numbers
let q53 = [1, 3, 6];
let a53 = Array.from({ length: 6 }, (_, i) => i + 1)
    .filter(i => !q53.includes(i));
console.log("a53: ", a53);

// 54. Find maximum difference
let q54 = [7, 1, 5, 3, 6, 4];
let a54 = Math.max(...q54) - Math.min(...q54);
console.log("a54: ", a54);

// 55. Move zeroes to the end
let q55 = [0, 1, 0, 3, 12];
let a55 = [...q55.filter(i => i !== 0), ...q55.filter(i => i === 0)];
console.log("a55: ", a55);

// 56. Move negative numbers to beginning
let q56 = [1, -2, 3, -4, 5];
let a56 = [...q56.filter(i => i < 0), ...q56.filter(i => i >= 0)];
console.log("a56: ", a56);

// 57. Find pair with given sum
let q57 = [[2, 7, 11, 15], 9];
let a57 = q57[0].find((i, index) =>
    q57[0].slice(index + 1).includes(q57[1] - i)
);
let pair57 = q57[0].map((i, index) =>
    q57[0].slice(index + 1).includes(q57[1] - i) ? [i, q57[1] - i] : null
).find(Boolean);
a57 = pair57;
console.log("a57: ", a57);

// 58. Find all pairs with given sum
let q58 = [[1, 2, 3, 4, 5, 6], 7];
let a58 = q58[0].flatMap((i, index) =>
    q58[0].slice(index + 1).filter(j => i + j === q58[1]).map(j => [i, j])
);
console.log("a58: ", a58);

// 59. Find triplets with given sum
let q59 = [[1, 2, 3, 4, 5], 9];
let a59 = [];
for (let i = 0; i < q59[0].length; i++) {
    for (let j = i + 1; j < q59[0].length; j++) {
        for (let k = j + 1; k < q59[0].length; k++) {
            if (q59[0][i] + q59[0][j] + q59[0][k] === q59[1]) {
                a59.push([q59[0][i], q59[0][j], q59[0][k]]);
            }
        }
    }
}
console.log("a59: ", a59);

// 60. Find maximum subarray sum
let q60 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let a60 = q60.reduce((max, i, index) => {
    let sum = q60.slice(0, index + 1).reduce((a, b) => a + b, 0);
    return Math.max(max, sum);
}, -Infinity);
console.log("a60: ", a60);

// 61. Find minimum subarray sum
let q61 = [3, -4, 2, -3, -1, 7];
let a61 = q61.reduce((min, i, index) => {
    let sum = q61.slice(0, index + 1).reduce((a, b) => a + b, 0);
    return Math.min(min, sum);
}, Infinity);
console.log("a61: ", a61);

// 62. Rotate array left by 2
let q62 = [1, 2, 3, 4, 5];
let a62 = [...q62.slice(2), ...q62.slice(0, 2)];
console.log("a62: ", a62);

// 63. Rotate array right by 2
let q63 = [1, 2, 3, 4, 5];
let a63 = [...q63.slice(-2), ...q63.slice(0, -2)];
console.log("a63: ", a63);

// 64. Find frequency of elements
let q64 = [1, 2, 2, 3, 3, 3];
let a64 = q64.reduce((obj, i) => {
    obj[i] = (obj[i] || 0) + 1;
    return obj;
}, {});
console.log("a64: ", a64);

// 65. Find most frequent element
let q65 = [1, 2, 2, 3, 3, 3];
let a65 = q65.reduce((obj, i) => {
    obj[i] = (obj[i] || 0) + 1;
    return obj;
}, {});
a65 = +Object.keys(a65).reduce((a, b) => a65[a] > a65[b] ? a : b);
console.log("a65: ", a65);

// 66. Find least frequent element
let q66 = [1, 2, 2, 3, 3, 3];
let a66 = q66.reduce((obj, i) => {
    obj[i] = (obj[i] || 0) + 1;
    return obj;
}, {});
a66 = +Object.keys(a66).reduce((a, b) => a66[a] < a66[b] ? a : b);
console.log("a66: ", a66);

// 67. Find common elements in three arrays
let q67 = [[1, 2, 3, 4], [2, 3, 4], [2, 4, 5]];
let a67 = q67[0].filter(i => q67[1].includes(i) && q67[2].includes(i));
console.log("a67: ", a67);

// 68. Flatten an array
let q68 = [1, [2, [3, 4]], 5];
let a68 = q68.flat(Infinity);
console.log("a68: ", a68);

// 69. Chunk an array
let q69 = [[1, 2, 3, 4, 5], 2];
let a69 = Array.from(
    { length: Math.ceil(q69[0].length / q69[1]) },
    (_, i) => q69[0].slice(i * q69[1], i * q69[1] + q69[1])
);
console.log("a69: ", a69);

// 70. Find kth largest element
let q70 = [[3, 2, 1, 5, 6, 4], 2];
let a70 = [...q70[0]].sort((a, b) => b - a)[q70[1] - 1];
console.log("a70: ", a70);

// 71. Count object properties
let q71 = { name: "John", age: 30, city: "Hyderabad" };
let a71 = Object.keys(q71).length;
console.log("a71: ", a71);

// 72. Get object keys
let q72 = { name: "John", age: 30 };
let a72 = Object.keys(q72);
console.log("a72: ", a72);

// 73. Get object values
let q73 = { name: "John", age: 30 };
let a73 = Object.values(q73);
console.log("a73: ", a73);

// 74. Convert object to array
let q74 = { a: 1, b: 2 };
let a74 = Object.entries(q74);
console.log("a74: ", a74);

// 75. Convert array to object
let q75 = [["a", 1], ["b", 2]];
let a75 = Object.fromEntries(q75);
console.log("a75: ", a75);

// 76. Find highest salary
let q76 = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 },
    { name: "C", salary: 60000 }
];
let a76 = q76.reduce((max, i) => i.salary > max.salary ? i : max).name;
console.log("a76: ", a76);

// 77. Find employees earning above 60000
let q77 = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 },
    { name: "C", salary: 70000 }
];
let a77 = q77.filter(i => i.salary > 60000).map(i => i.name);
console.log("a77: ", a77);

// 78. Group employees by department
let q78 = [
    { name: "A", dept: "IT" },
    { name: "B", dept: "HR" },
    { name: "C", dept: "IT" }
];
let a78 = q78.reduce((obj, i) => {
    (obj[i.dept] ||= []).push(i.name);
    return obj;
}, {});
console.log("a78: ", a78);

// 79. Sort employees by salary
let q79 = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 }
];
let a79 = [...q79].sort((a, b) => b.salary - a.salary).map(i => i.name);
console.log("a79: ", a79);

// 80. Find duplicate objects by ID
let q80 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];
let a80 = [...new Set(
    q80.filter((i, index) => q80.findIndex(j => j.id === i.id) !== index)
        .map(i => i.id)
)];
console.log("a80: ", a80);

// 81. Remove duplicate objects
let q81 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];
let a81 = [...new Map(q81.map(i => [i.id, i])).values()];
console.log("a81: ", a81);

// 82. Merge two objects
let q82 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
let a82 = Object.assign({}, ...q82);
console.log("a82: ", a82);

// 83. Find common properties
let q83 = [{ a: 1, b: 2, c: 3 }, { b: 2, c: 4, d: 5 }];
let a83 = Object.keys(q83[0]).filter(i => i in q83[1]);
console.log("a83: ", a83);

// 84. Find property with maximum value
let q84 = { a: 10, b: 50, c: 30 };
let a84 = Object.keys(q84).reduce((a, b) => q84[a] > q84[b] ? a : b);
console.log("a84: ", a84);

// 85. Invert an object
let q85 = { a: "x", b: "y" };
let a85 = Object.fromEntries(Object.entries(q85).map(([key, value]) => [value, key]));
console.log("a85: ", a85);

// 86. Deep clone an object
let q86 = { user: { name: "John" } };
let a86 = structuredClone(q86);
console.log("a86: ", a86);

// 87. Check whether two objects are equal
let q87 = [{ a: 1, b: 2 }, { a: 1, b: 2 }];
let a87 = JSON.stringify(q87[0]) === JSON.stringify(q87[1]);
console.log("a87: ", a87);

// 88. Remove null properties
let q88 = { a: 1, b: null, c: 3, d: null };
let a88 = Object.fromEntries(Object.entries(q88).filter(([key, value]) => value !== null));
console.log("a88: ", a88);

// 89. Convert nested object to flat object
let q89 = {
    user: {
        name: "John",
        address: {
            city: "Hyderabad"
        }
    }
};
let a89 = {};
let flatten89 = (obj, prefix = "") => Object.entries(obj).forEach(([key, value]) => {
    let path = prefix ? `${prefix}.${key}` : key;
    typeof value === "object" && value !== null
        ? flatten89(value, path)
        : a89[path] = value;
});
flatten89(q89);
console.log("a89: ", a89);

// 90. Find nested property
let q90 = { user: { profile: { name: "John" } } };
let a90 = q90?.user?.profile?.name;
console.log("a90: ", a90);

// 91. Check even or odd
let q91 = 10;
let a91 = q91 % 2 === 0 ? "Even" : "Odd";
console.log("a91: ", a91);

// 92. Check positive or negative
let q92 = -10;
let a92 = q92 >= 0 ? "Positive" : "Negative";
console.log("a92: ", a92);

// 93. Find factorial
let q93 = 5;
let a93 = Array.from({ length: q93 }, (_, i) => i + 1)
    .reduce((product, i) => product * i, 1);
console.log("a93: ", a93);

// 94. Generate Fibonacci series
let q94 = 7;
let a94 = Array.from({ length: q94 }).reduce((arr) => {
    arr.push(arr.length < 2 ? arr.length : arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}, []);
console.log("a94: ", a94);

// 95. Check prime number
let q95 = 17;
let a95 = q95 > 1 && Array.from({ length: q95 - 2 }, (_, i) => i + 2)
    .every(i => q95 % i !== 0);
console.log("a95: ", a95);

// 96. Generate prime numbers
let q96 = 10;
let a96 = Array.from({ length: q96 - 1 }, (_, i) => i + 2)
    .filter(n => Array.from({ length: n - 2 }, (_, i) => i + 2).every(i => n % i !== 0));
console.log("a96: ", a96);

// 97. Find GCD
let q97 = [12, 18];
let a97 = q97.reduce((a, b) => {
    while (b) [a, b] = [b, a % b];
    return a;
});
console.log("a97: ", a97);

// 98. Find LCM
let q98 = [12, 18];
let gcd98 = q98.reduce((a, b) => {
    while (b) [a, b] = [b, a % b];
    return a;
});
let a98 = Math.abs(q98[0] * q98[1]) / gcd98;
console.log("a98: ", a98);

// 99. Reverse a number
let q99 = 12345;
let a99 = Number(String(q99).split("").reverse().join(""));
console.log("a99: ", a99);

// 100. Check palindrome number
let q100 = 121;
let a100 = String(q100) === String(q100).split("").reverse().join("");
console.log("a100: ", a100);

// 101. Sum digits
let q101 = 12345;
let a101 = String(q101).split("").reduce((sum, i) => sum + Number(i), 0);
console.log("a101: ", a101);

// 102. Count digits
let q102 = 123456;
let a102 = String(Math.abs(q102)).length;
console.log("a102: ", a102);

// 103. Check Armstrong number
let q103 = 153;
let digits103 = String(q103).split("");
let a103 = digits103.reduce((sum, i) => sum + Number(i) ** digits103.length, 0) === q103;
console.log("a103: ", a103);

// 104. Generate Armstrong numbers
let q104 = 500;
let a104 = Array.from({ length: q104 }, (_, i) => i + 1).filter(n => {
    let digits = String(n).split("");
    return digits.reduce((sum, i) => sum + Number(i) ** digits.length, 0) === n;
});
console.log("a104: ", a104);

// 105. Find power without Math.pow
let q105 = [2, 5];
let a105 = Array.from({ length: q105[1] }).reduce(result => result * q105[0], 1);
console.log("a105: ", a105);

// 106. Calculate square root
let q106 = 25;
let a106 = Math.sqrt(q106);
console.log("a106: ", a106);

// 107. Find maximum of three numbers
let q107 = [10, 20, 15];
let a107 = Math.max(...q107);
console.log("a107: ", a107);

// 108. Swap two numbers
let q108 = [10, 20];
[q108[0], q108[1]] = [q108[1], q108[0]];
let a108 = q108;
console.log("a108: ", a108);

// 109. Check leap year
let q109 = 2024;
let a109 = q109 % 4 === 0 && (q109 % 100 !== 0 || q109 % 400 === 0);
console.log("a109: ", a109);

// 110. Convert Celsius to Fahrenheit
let q110 = 100;
let a110 = (q110 * 9 / 5) + 32;
console.log("a110: ", a110);

// 111. Convert Fahrenheit to Celsius
let q111 = 212;
let a111 = (q111 - 32) * 5 / 9;
console.log("a111: ", a111);

// 112. Generate multiplication table
let q112 = 5;
let a112 = Array.from({ length: 10 }, (_, i) => q112 * (i + 1));
console.log("a112: ", a112);

// 113. Find sum from 1 to N
let q113 = 10;
let a113 = Array.from({ length: q113 }, (_, i) => i + 1)
    .reduce((sum, i) => sum + i, 0);
console.log("a113: ", a113);

// 114. Find product from 1 to N
let q114 = 5;
let a114 = Array.from({ length: q114 }, (_, i) => i + 1)
    .reduce((product, i) => product * i, 1);
console.log("a114: ", a114);

// 115. Check perfect number
let q115 = 28;
let a115 = Array.from({ length: q115 - 1 }, (_, i) => i + 1)
    .filter(i => q115 % i === 0)
    .reduce((sum, i) => sum + i, 0) === q115;
console.log("a115: ", a115);

// 116. Use map() to double numbers
let q116 = [1, 2, 3, 4];
let a116 = q116.map(i => i * 2);
console.log("a116: ", a116);

// 117. Use map() to square numbers
let q117 = [1, 2, 3, 4];
let a117 = q117.map(i => i * i);
console.log("a117: ", a117);

// 118. Use filter() to find even numbers
let q118 = [1, 2, 3, 4, 5, 6];
let a118 = q118.filter(i => i % 2 === 0);
console.log("a118: ", a118);

// 119. Use filter() to find numbers > 10
let q119 = [5, 12, 8, 20, 3];
let a119 = q119.filter(i => i > 10);
console.log("a119: ", a119);

// 120. Use reduce() to calculate sum
let q120 = [1, 2, 3, 4];
let a120 = q120.reduce((sum, i) => sum + i, 0);
console.log("a120: ", a120);

// 121. Use reduce() to calculate product
let q121 = [1, 2, 3, 4, 5];
let a121 = q121.reduce((product, i) => product * i, 1);
console.log("a121: ", a121);

// 122. Use reduce() to find maximum
let q122 = [10, 50, 20, 80];
let a122 = q122.reduce((max, i) => Math.max(max, i), -Infinity);
console.log("a122: ", a122);

// 123. Use reduce() to count occurrences
let q123 = ["a", "b", "a", "c", "b", "a"];
let a123 = q123.reduce((obj, i) => {
    obj[i] = (obj[i] || 0) + 1;
    return obj;
}, {});
console.log("a123: ", a123);

// 124. Use reduce() to concatenate strings
let q124 = ["Java", "Script", "Interview"];
let a124 = q124.reduce((result, i) => result + i, "");
console.log("a124: ", a124);

// 125. Use reduce() to flatten arrays
let q125 = [[1, 2], [3, 4], [5]];
let a125 = q125.reduce((result, i) => result.concat(i), []);
console.log("a125: ", a125);

// 126. Find unique values using filter()
let q126 = [1, 2, 2, 3, 3, 4];
let a126 = q126.filter(i => q126.indexOf(i) === q126.lastIndexOf(i));
console.log("a126: ", a126);

// 127. Find strings longer than 5 characters
let q127 = ["Java", "Spring", "JavaScript", "AWS"];
let a127 = q127.filter(i => i.length > 5);
console.log("a127: ", a127);

// 128. Convert strings to uppercase
let q128 = ["java", "spring", "react"];
let a128 = q128.map(i => i.toUpperCase());
console.log("a128: ", a128);

// 129. Calculate total salary
let q129 = [
    { salary: 50000 },
    { salary: 60000 },
    { salary: 70000 }
];
let a129 = q129.reduce((sum, i) => sum + i.salary, 0);
console.log("a129: ", a129);

// 130. Find average salary
let q130 = [
    { salary: 50000 },
    { salary: 60000 },
    { salary: 70000 }
];
let a130 = q130.reduce((sum, i) => sum + i.salary, 0) / q130.length;
console.log("a130: ", a130);

// 131. Sort strings alphabetically
let q131 = ["banana", "apple", "orange"];
let a131 = [...q131].sort();
console.log("a131: ", a131);

// 132. Sort objects by age
let q132 = [
    { name: "A", age: 30 },
    { name: "B", age: 20 },
    { name: "C", age: 25 }
];
let a132 = [...q132].sort((a, b) => a.age - b.age).map(i => i.name);
console.log("a132: ", a132);

// 133. Find first number > 50
let q133 = [10, 20, 60, 70];
let a133 = q133.find(i => i > 50);
console.log("a133: ", a133);

// 134. Check whether all numbers are positive
let q134 = [1, 2, 3, 4];
let a134 = q134.every(i => i > 0);
console.log("a134: ", a134);

// 135. Check whether any number is negative
let q135 = [1, 2, -3, 4];
let a135 = q135.some(i => i < 0);
console.log("a135: ", a135);

// 136. Find user by ID
let q136 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
let a136 = q136.find(i => i.id === 2);
console.log("a136: ", a136);

// 137. Group numbers by even/odd
let q137 = [1, 2, 3, 4, 5, 6];
let a137 = q137.reduce((obj, i) => {
    (i % 2 === 0 ? obj.even : obj.odd).push(i);
    return obj;
}, { even: [], odd: [] });
console.log("a137: ", a137);

// 138. Partition array
let q138 = [1, 2, 3, 4, 5];
let a138 = q138.reduce((obj, i) => {
    (i > 3 ? obj.true : obj.false).push(i);
    return obj;
}, { true: [], false: [] });
console.log("a138: ", a138);

// 139. Find duplicate strings
let q139 = ["Java", "Spring", "Java", "AWS", "Spring"];
let a139 = [...new Set(q139.filter(i => q139.indexOf(i) !== q139.lastIndexOf(i)))];
console.log("a139: ", a139);

// 140. Find strings occurring only once
let q140 = ["Java", "Spring", "Java", "AWS", "Spring"];
let a140 = q140.filter(i => q140.indexOf(i) === q140.lastIndexOf(i));
console.log("a140: ", a140);

// 141. Write a function to add two numbers
let q141 = [10, 20];
let a141 = ((a, b) => a + b)(...q141);
console.log("a141: ", a141);

// 142. Write an arrow function for multiplication
let q142 = [5, 4];
let a142 = ((a, b) => a * b)(...q142);
console.log("a142: ", a142);

// 143. Function to check palindrome
let q143 = "madam";
let a143 = ((str) => str === str.split("").reverse().join(""))(q143);
console.log("a143: ", a143);

// 144. Function with default parameter
let q144 = undefined;
let a144 = ((name = "Guest") => `Hello ${name}`)(q144);
console.log("a144: ", a144);

// 145. Function using rest parameters
let q145 = [1, 2, 3, 4];
let a145 = ((...numbers) => numbers.reduce((sum, i) => sum + i, 0))(...q145);
console.log("a145: ", a145);

// 146. Function using spread operator
let q146 = [1, 2, 3];
let a146 = ((...numbers) => numbers)(...q146);
console.log("a146: ", a146);

// 147. Create a callback function
let q147 = 5;
let a147 = ((number, callback) => callback(number))(q147, i => i * 2);
console.log("a147: ", a147);

// 148. Implement calculator using callback
let q148 = [10, 5];
let a148 = ((a, b, operation) => operation(a, b))(...q148, (a, b) => a + b);
console.log("a148: ", a148);

// 149. Implement custom map()
let q149 = [1, 2, 3];
let a149 = [];
q149.forEach(i => a149.push(i * 2));
console.log("a149: ", a149);

// 150. Implement custom filter()
let q150 = [1, 2, 3, 4];
let a150 = [];
q150.forEach(i => {
    if (i % 2 === 0) a150.push(i);
});
console.log("a150: ", a150);

// 151. Implement custom reduce()
let q151 = [1, 2, 3, 4];
let a151 = 0;
q151.forEach(i => a151 += i);
console.log("a151: ", a151);

// 152. Create a closure counter
let q152 = (() => {
    let count = 0;
    return () => ++count;
})();
let a152 = [q152(), q152(), q152()];
console.log("a152: ", a152);

// 153. Create a private variable using closure
let q153 = (() => {
    let balance = 1000;
    return () => balance;
})();
let a153 = q153();
console.log("a153: ", a153);

// 154. Function currying
let q154 = 2;
let a154 = ((a) => (b) => (c) => a + b + c)(q154)(3)(4);
console.log("a154: ", a154);

// 155. Compose functions
let q155 = 3;
let a155 = ((x) => ((x) => x * 2)((x) => x * x)(x))(q155);
console.log("a155: ", a155);

// 156. Destructure an array
let q156 = [10, 20, 30];
let [a156_1, a156_2, a156_3] = q156;
let a156 = [a156_1, a156_2, a156_3];
console.log("a156: ", a156);

// 157. Destructure an object
let q157 = { name: "John", age: 30 };
let { name: name157, age: age157 } = q157;
let a157 = [name157, age157];
console.log("a157: ", a157);

// 158. Swap variables using destructuring
let q158 = [10, 20];
[q158[0], q158[1]] = [q158[1], q158[0]];
let a158 = q158;
console.log("a158: ", a158);

// 159. Remove duplicates using Set
let q159 = [1, 2, 2, 3, 3];
let a159 = [...new Set(q159)];
console.log("a159: ", a159);

// 160. Find union using Set
let q160 = [[1, 2, 3], [3, 4, 5]];
let a160 = [...new Set([...q160[0], ...q160[1]])];
console.log("a160: ", a160);

// 161. Find intersection using Set
let q161 = [[1, 2, 3], [2, 3, 4]];
let a161 = q161[0].filter(i => new Set(q161[1]).has(i));
console.log("a161: ", a161);

// 162. Count unique values using Set
let q162 = [1, 2, 2, 3, 4, 4];
let a162 = new Set(q162).size;
console.log("a162: ", a162);

// 163. Create a Map from array
let q163 = [["a", 1], ["b", 2]];
let a163 = new Map(q163);
console.log("a163: ", a163);

// 164. Count frequencies using Map
let q164 = ["a", "b", "a", "c", "b"];
let a164 = q164.reduce((map, i) => {
    map.set(i, (map.get(i) || 0) + 1);
    return map;
}, new Map());
console.log("a164: ", a164);

// 165. Use optional chaining
let q165 = { user: {} };
let a165 = q165?.user?.address?.city;
console.log("a165: ", a165);

// 166. Use nullish coalescing
let q166 = null;
let a166 = q166 ?? "Guest";
console.log("a166: ", a166);

// 167. Use logical OR default
let q167 = "";
let a167 = q167 || "Guest";
console.log("a167: ", a167);

// 168. Create immutable object
let q168 = { name: "John" };
Object.freeze(q168);
let a168 = q168;
console.log("a168: ", a168);

// 169. Clone array using spread
let q169 = [1, 2, 3];
let a169 = [...q169];
console.log("a169: ", a169);

// 170. Merge arrays using spread
let q170 = [[1, 2], [3, 4]];
let a170 = [...q170[0], ...q170[1]];
console.log("a170: ", a170);

// 171. Merge objects using spread
let q171 = [{ a: 1 }, { b: 2 }];
let a171 = { ...q171[0], ...q171[1] };
console.log("a171: ", a171);

// 172. Use template literals
let q172 = { name: "John", age: 30 };
let a172 = `${q172.name} is ${q172.age} years old`;
console.log("a172: ", a172);

// 173. Use for...of
let q173 = [10, 20, 30];
let a173 = [];
for (let i of q173) {
    a173.push(i);
}
console.log("a173: ", a173);

// 174. Use for...in
let q174 = { a: 1, b: 2 };
let a174 = [];
for (let i in q174) {
    a174.push(i);
}
console.log("a174: ", a174);

// 175. Create a Symbol property
let q175 = Symbol("id");
let obj175 = {};
obj175[q175] = 123;
let a175 = obj175[q175];
console.log("a175: ", a175);

// 176. Create a resolved Promise
let q176 = Promise.resolve("Success");
let a176 = q176;
console.log("a176: ", a176);

// 177. Create a rejected Promise
let q177 = Promise.reject("Failed");
let a177 = q177.catch(i => i);
a177.then(i => console.log("a177: ", i));

// 178. Use then()
let q178 = Promise.resolve(10);
let a178 = q178.then(i => i * 2);
a178.then(i => console.log("a178: ", i));

// 179. Use catch()
let q179 = Promise.reject("Error");
let a179 = q179.catch(i => i);
a179.then(i => console.log("a179: ", i));

// 180. Use async/await
let q180 = Promise.resolve("Hello");
let a180 = await q180;
console.log("a180: ", a180);

// 181. Handle async error
let q181 = Promise.reject("Error");
let a181;
try {
    a181 = await q181;
} catch (e) {
    a181 = "Error handled";
}
console.log("a181: ", a181);

// 182. Execute promises sequentially
let q182 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];
let a182 = [];
for (let promise of q182) {
    a182.push(await promise);
}
console.log("a182: ", a182);

// 183. Use Promise.all()
let q183 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];
let a183 = await Promise.all(q183);
console.log("a183: ", a183);

// 184. Test Promise.all failure
let q184 = [
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3)
];
let a184;
try {
    a184 = await Promise.all(q184);
} catch (e) {
    a184 = e;
}
console.log("a184: ", a184);

// 185. Use Promise.race()
let q185 = [
    Promise.resolve("A"),
    Promise.resolve("B")
];
let a185 = await Promise.race(q185);
console.log("a185: ", a185);

// 186. Use Promise.allSettled()
let q186 = [
    Promise.resolve(1),
    Promise.reject("Error")
];
let a186 = await Promise.allSettled(q186);
console.log("a186: ", a186);

// 187. Implement delay function
let q187 = 1000;
let a187 = await new Promise(resolve => setTimeout(() => resolve("Completed"), q187));
console.log("a187: ", a187);

// 188. Retry failed Promise
let q188 = [
    Promise.reject("Failed"),
    Promise.reject("Failed"),
    Promise.resolve("Success")
];
let a188;
for (let promise of q188) {
    try {
        a188 = await promise;
        break;
    } catch (e) {
        a188 = e;
    }
}
console.log("a188: ", a188);

// 189. Execute asynchronous tasks with concurrency limit
let q189 = 10;
let concurrency189 = 3;
let a189 = [];
for (let i = 0; i < q189; i += concurrency189) {
    let batch = Array.from(
        { length: Math.min(concurrency189, q189 - i) },
        (_, j) => i + j + 1
    );
    a189.push(batch);
}
console.log("a189: ", a189);

// 190. Sequential API calls
let q190 = [
    Promise.resolve("User"),
    Promise.resolve("Orders"),
    Promise.resolve("Payments")
];
let a190 = [];
for (let promise of q190) {
    a190.push(await promise);
}
console.log("a190: ", a190);

// 191. Implement debounce
let q191 = ["j", "ja", "jav", "java"];
let a191 = q191[q191.length - 1];
console.log("a191: ", a191);

// 192. Implement throttle
let q192 = Array.from({ length: 100 }, (_, i) => i + 1);
let a192 = q192.filter((_, i) => i % 10 === 0);
console.log("a192: ", a192);

// 193. Implement memoization
let q193 = [40, 40];
let cache193 = {};
let a193 = q193.map(i => {
    if (cache193[i]) return cache193[i];
    let result = i <= 1 ? i : i * (i - 1);
    cache193[i] = result;
    return result;
});
console.log("a193: ", a193);

// 194. Implement custom bind()
let q194 = {
    user: { name: "John" },
    city: "Hyderabad"
};
let a194 = ((city) => `${q194.user.name} from ${city}`)(q194.city);
console.log("a194: ", a194);

// 195. Implement custom call()
let q195 = {
    user: { name: "John" },
    city: "Hyderabad"
};
let a195 = ((obj, city) => `${obj.user.name} from ${city}`)(q195, q195.city);
console.log("a195: ", a195);

// 196. Implement custom apply()
let q196 = {
    user: { name: "John" },
    args: ["Hyderabad"]
};
let a196 = ((obj, args) => `${obj.user.name} from ${args[0]}`)(q196, q196.args);
console.log("a196: ", a196);

// 197. Implement EventEmitter
let q197 = {};
let events197 = {};
events197.login = [];
events197.login.push(() => "Login event executed");
let a197 = events197.login.map(i => i());
console.log("a197: ", a197);

// 198. Implement a custom Promise
let q198 = "Success";
let a198 = await new Promise(resolve => resolve(q198));
console.log("a198: ", a198);

// 199. Implement deep equality
let q199 = [
    {
        name: "John",
        address: {
            city: "Hyderabad"
        }
    },
    {
        name: "John",
        address: {
            city: "Hyderabad"
        }
    }
];
let a199 = JSON.stringify(q199[0]) === JSON.stringify(q199[1]);
console.log("a199: ", a199);

// 200. Implement deep clone
let q200 = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};
let a200 = structuredClone(q200);
a200.address.city = "Bangalore";
console.log("a200: ", a200);
console.log("Original q200: ", q200);