var a = 1 + '2'
console.log(a);

// The number 1 and string '1' look nothing alike to the computer. JS handles seeing both a string
// and a number by coercing the number.

// If there was an operator handling multiple variables, one including a string, we know that the
// data returned from the operator wold be coerced into another data type "a string".


console.log(1 < 2 < 3);
// returns true
console.log(3 < 2 < 1);
// also returns true. Why?

// This is due to associativity. The second statement is instead evaluating (false < 1)

Number(false);
// returns 0

Number('3');
// returns 3

Number(undefined);
// returns NaN

Number(null);
// returns 0

// It is important to understand how JS will coerce undefined and null

3 == 3
// returns too

'3' == 3
// also returns true

// knowing that false == 0 through coercion, does null == 0 bahave the same?
console.log(null == 0);
// returns false
// although null would coerce to 0 for comparison, it wont for the == operator.

// using strict equality '===' vs '==' is a solution to this
3 === 3
// return true
'3' === '3'
// returns true
'3' === 3
// returns false

// double equals should be used ONLY when expecting coercion
