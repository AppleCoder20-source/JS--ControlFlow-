const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius; // Total area of garden which is PI * radius^2
console.log(`Area: ${area}`)
const plantSpace = 0.8; 
const startingPlants = 20;

const maxPlants = area / plantSpace; // 98 is max plants
console.log(`MaxPlants: ${maxPlants}`) 

// Week 1 calculations
const week1 = 1
let plantCount = startingPlants * (2 ** week1); 
console.log("Week 1 calculations")
console.log(plantCount)
if (plantCount < 0.5 * maxPlants) {
    console.log(`We need to plant more plants because we have ${plantCount} plants after 1 week.`);
} else if (plantCount > 0.8 * maxPlants) {
    console.log(`Prune plants since we have excess. We currently have ${plantCount} plants.`);
} else {
    console.log("Monitor plants for growth.");
}

const week2 = 2
plantCount = startingPlants * (2 ** week2);
console.log("Week 2 calculations")
console.log(plantCount)
if (plantCount < 0.5 * maxPlants) {
    console.log(`We need to plant more plants because we have ${plantCount} plants after 2 weeks.`);
} else if (plantCount > 0.8 * maxPlants) {
    console.log(`Prune plants since we have excess. We currently have ${plantCount} plants.`);
} else {
    console.log("Monitor plants for growth.");
}

// Week 3 calculations
const week3 = 3
plantCount = startingPlants * (2 ** week3); 
console.log("Week 3")
console.log(plantCount)

if (plantCount < 0.5 * maxPlants) {
    console.log(`We need to plant more plants because we have ${plantCount} plants after 3 weeks.`);
} else if (plantCount > 0.8 * maxPlants) {
    console.log(`Prune plants since we have excess. We currently have ${plantCount} plants.`);
} else {
    console.log("Monitor plants for growth.");
}

//Part 2 
let Plant = 100;
const week10 = 10;
let space = 0.8


plantCount = Plant * (2 ** week10);

let radiusFormula = plantCount * space


let radiusGarden = Math.sqrt(radiusFormula / PI)

console.log(radiusGarden);

//Part 3

plantCount = Plant * (2 ** week10); // Recalculate the number of plants after 10 weeks

try {
    if (plantCount > maxPlants) {
        // Throw an error if plantCount exceeds the maximum capacity
        throw new Error(`Error: Exceeds Capacity, Garden currently has ${plantCount} plants after 10 weeks!`);
    } else if (plantCount > 0.8 * maxPlants) {
        
        console.log(`Warning: You should prune the plants, you have ${plantCount} plants, which is more than 80% of the garden's capacity.`);
    } else {
        console.log("Monitor plants for growth.");
    }
} catch (error) {
    console.error(error.message); 
}
