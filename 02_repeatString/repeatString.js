const repeatString = function(string , num) {
    let chain="";
    if(string==="") return '';
    if(num<0) return 'ERROR';
    for(let i=0;i<num;i++){
        chain+=string;
    }
    return chain;
};

// Do not edit below this line
module.exports = repeatString;
