const removeFromArray = function(array,...val) {
    let other=[];
    for(let i=0;i<array.length;i++){
        if(!val.includes(array[i])){
            other.push(array[i]);
        }
    }
    return other;
};

// Do not edit below this line
module.exports = removeFromArray;
