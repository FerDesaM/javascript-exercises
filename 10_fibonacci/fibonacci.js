const fibonacci = function(position) {
    let getPos=parseInt(position);
    if(getPos<0)
        return "OOPS";
    if(getPos===0)
        return 0;
    if(getPos===1)
        return 1;
    else
        return fibonacci(getPos-1)+fibonacci(getPos-2)
};

// Do not edit below this line
module.exports = fibonacci;
