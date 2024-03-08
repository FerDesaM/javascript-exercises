const sumAll = function(first,second) {
    if(!Number.isInteger(first)||!Number.isInteger(second)) return 'ERROR';
    if((first||second)<0) return 'ERROR';

    let sum=0;
    let min=Math.min(first,second);
    let max=Math.max(first,second);
    
    for(let i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
