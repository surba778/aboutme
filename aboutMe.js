function displayName(callback) {
    setTimeout(() => {
        console.log("My name is Suresh.");
        callback();
    }, 2000); // 2 seconds delay
}

function displayAge(callback) {
    setTimeout(() => {
        console.log("I am 37 years old.");
        callback();
    }, 2000); // 2 seconds delay
}

function displayBirthPlace(callback) {
    setTimeout(() => {
        console.log("I was born in India but i am settled in Sweden now.");
        callback();
    }, 2000); // 2 seconds delay
}

function displayHobbies(callback) {
    setTimeout(() => {
        console.log("I enjoy learning, playing games and listening music!");
        callback();
    }, 2000); // 2 seconds delay
}

// Now, to display the information in sequence
function displayAllInfo() {
    displayName(() => {
        displayAge(() => {
            displayBirthPlace(() => {
                displayHobbies(() => {
                    console.log("That's all about me for now!");
                });
            });
        });
    });
}

displayAllInfo();