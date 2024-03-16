const findTheOldest = function(Person) {
    return Person.reduce((oldest,younger)=>{
    const Oldest=AgeCurrent(oldest.yearOfBirth,oldest.yearOfDeath);
    const Actual=AgeCurrent(younger.yearOfBirth,younger.yearOfDeath);
        return Oldest<Actual?younger:oldest;
}); 
};

const AgeCurrent=function(birth,death){
    if(!death){
        death=new Date().getFullYear();
    }
    return death-birth;
}



// Do not edit below this line
module.exports = findTheOldest;
