Age = [21, 22, 23, 24]
console.log(Age.toString())
//
const num = window.prompt()
const str = num.toString()
const result = [str[0]]

for(let x=1; x<str.length; x++)
{
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
    {
        result.push('-', str[x])
    }
    else
    {
        result.push(str[x])
    }
}
console.log(result.join(''))
//
var str2 = 'cao DUY tHaNh';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result2 = [];

for(var x=0; x<str2.length; x++)
{
    if(UPPER.indexOf(str2[x]) !== -1)
    {
        result2.push(str2[x].toLowerCase());
    }
    else if(LOWER.indexOf(str2[x]) !== -1)
    {
        result2.push(str2[x].toUpperCase());
    }
    else
    {
        result2.push(str2[x]);
    }
}
console.log(result2.join(''));