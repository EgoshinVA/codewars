/*
DESCRIPTION:
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

// Solution:

function solution(string) {
    if (string.length == 0)
        return ''
    else{
        let str = string[0]
        for (let i = 1; i < string.length; i++){
            if (string[i] == string[i].toUpperCase())
                str += " " + string[i]
            else
                str += string[i]
        }
        return str}
}