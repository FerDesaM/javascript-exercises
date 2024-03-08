const removeFromArray = function(array,...args) {
    let other=[];
    for(let i=0;i<array.length;i++){
        if(!args.includes(array[i])){
            other.push(array[i]);
        }
    }
    return other;
};

// Do not edit below this line
module.exports = removeFromArray;
