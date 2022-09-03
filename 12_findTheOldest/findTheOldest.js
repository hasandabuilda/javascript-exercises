const findTheOldest = function(people) {
    return people.reduce((eldest, person) => {
        let eldestAge, age;
        let date = new Date();
        if (!('yearOfDeath' in eldest)) {
            eldestAge = date.getFullYear() - eldest.yearOfBirth;
        }
        else {
            eldestAge = eldest.yearOfDeath - eldest.yearOfBirth;
        }
        if (!('yearOfDeath' in person)) {
            age = date.getFullYear() - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > eldestAge) {
            return person;
        }
        else {
            return eldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
