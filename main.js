// PART 1


const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// PART 2

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    console.log(conjoinedWord)
}

conjunction("Master", "Card")


// PART 3


const ModSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    series: {
        start: "1968",
        end: "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${ModSquad.members}</div>`
})


document.querySelector(".show-info").innerHTML = HTMLRepresentation

//PART 4 

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation = false;
let locationAmounts = 0;
// console.log(locations)

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k];
    if (currentLocation[0] < 2) {
         invalidLocation = true;
         console.log("This location is invalid");
    } else {
        locationAmounts += 1;
    }
}

console.log(`There were ${locationAmounts} locations displayed`)

// PART 5

const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
const randomizer = Math.floor(Math.random() * 7)


const llamaNamer = function () {
        let llamaName = possibleNames[randomizer];
        return llamaName
}

const namer = function () {
        const suffix = " the Llama"
        const name =  llamaNamer();
        return name + suffix
    }


    
nameMaker = namer()
console.log(nameMaker)