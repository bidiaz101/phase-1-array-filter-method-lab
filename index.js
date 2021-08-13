// Code your solution here
function findMatching(names, string) {
    return names.filter(function (names) {
        return names.toLowerCase() === string.toLowerCase();
    });
};

function fuzzyMatch (names, string) {
    const x = string.length-1
    return names.filter(function (names) {
        return names.toLowerCase().charAt(x) === string.toLowerCase().charAt(x);
    });
};

function matchName (driverObj, string) {
    return driverObj.filter(function(obj){
        return obj.name === string;
    });
};

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby', 'billy', 'billyrae', 'Billyrae'];

console.log(fuzzyMatch(drivers, 'sA'));
