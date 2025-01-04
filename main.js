const { faker } = require('@faker-js/faker');
const fs = require('fs');  // Required to write to a file

// Function to generate 1000 random names
function generateRandomUsers(count) {
    const users = [];

    for (let i = 0; i < count; i++) {
        const randomName = faker.person.fullName();
        const [firstName, lastName] = randomName.split(' ');

        users.push({
            First: firstName,
            Last: lastName
        });
    }

    return users;
}

// Generate 1000 random users
const randomUsers = generateRandomUsers(10000);

// Save to JSON file
fs.writeFile('./data/random.json', JSON.stringify(randomUsers, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('1000 random names saved to randomUsers.json');
    }
});