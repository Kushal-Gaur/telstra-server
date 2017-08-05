
function negativeSum(...args)
{
 return args.reduce((arg, total)=>{
    return arg - total;
 },0);
}

console.log(
    negativeSum(1,5,10)
);