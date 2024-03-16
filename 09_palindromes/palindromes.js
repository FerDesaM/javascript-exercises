const palindromes = function (word) {
    const panlindrome=word.replace(/[^a-zA-Z1-9]/g,'').toLowerCase();
    for(let i=word.length-1;i>0;i--){
        if(panlindrome[panlindrome.length-1-i]!==panlindrome[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
