// function
const name1 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name1 + lastname;
const nickname = "juandc";

function complete() {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

complete();

// function using parameters and arguments
function complete(completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

complete("Juan David Castro Gallego","juandc");