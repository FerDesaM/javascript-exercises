const reverseString = function(string) {
    let chain="";
    for(let i=string.length-1;i>=0;i--){
        chain+=string[i];
    }
    return chain;
};

// Do not edit below this line
module.exports = reverseString;
