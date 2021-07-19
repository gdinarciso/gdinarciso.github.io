/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */

function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    let numAnimalsN = Number(numAnimals);
    let avgFoodN = Number(avgFood);
    if (isNaN(avgFoodN) === false && isNaN(numAnimalsN) === false) {
        if (numAnimalsN + avgFoodN < 0) {
            return -1;
        } else {
            return (numAnimalsN * avgFoodN).toFixed(3);
        }
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

function week () {
    const DayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday', 'Sunday'];
    var week = [];
    const Days = prompt("How many week's days?:");
    for (let i = 0; i < Days; i++) {
        let DayName = prompt("Week day's name:", DayNames[i]);
        let DayTraffic = prompt(`How many people on ${DayName}?:`);
        DayName = new Weekday(DayName, Number(DayTraffic));
        week.push(DayName);
    }
    return week;
}

function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    var week = [];
    var PopularDays = [];
    var PopularDay = '';
    const DayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday', 'Sunday'];
    const Days = prompt("How many week's days?:");
    
    //Populating the week array
    for (let i = 0; i < Days; i++) {
        let DayName = prompt("Week day's name:", DayNames[i]);
        let DayTraffic = prompt(`How many people on ${DayName}?:`);
        DayName = new Weekday(DayName, Number(DayTraffic));
        week.push(DayName);
    }
    //Finding the most crowdy day
    for (let i = 0; i < Days; i++) {
        for (let j = 1; j < i; j++) {
            if (week[i].traffic > week[j].traffic) {
                PopularDay = week[i];
                PopularDays = [week[i].name];
            } else {
                PopularDay = week[j];
                PopularDays = [week[j].name];
            }
        }
    }
    /*
    if (PopularDay === '') {
        return null
    } else {
        */
        //Finding if there is another day with the same traffic
        for (let i = 0; i < Days; i++) {
            if (PopularDay.name != week[i].name) {
                if (PopularDay.traffic === week[i].traffic) {
                    PopularDays.push(week[i].name);
                }
            }
            
        }
        //Print out if there is more than one winner
        if (PopularDays.length > 1) {
            return PopularDays;
        } else {
            return PopularDay.name;
        }
    //}
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday(name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item(name, barcode, sellingPrice, buyingPrice) {
    this.name = name;
    this.barcode = barcode;
    this.sellingPrice = sellingPrice;
    this.buyingPrice = buyingPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal(name, type, breed) {
    this.name = name;
    this.type = type;
    this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}     
