// Destructive Array Methods Include ; //They change the array 
                // push()
                // unshift()
                // pop()
                // shift()
                // splice()

// Non Destructive Array Methods Include ; //THey do not change the array
                // Spread Operator (...)
                // .slice()

// Add Elements to an Array

    // .push() method adds elements to the end of an Array and .unshift() adds them to the beginning of the array

    const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

    superheroes.push("Wonder Woman");
    superheroes.unshift("Batman");

    console.log(superheroes);

    // spread Operator (...<array name being copied>) -> It is used to make a copy of an Array

    const coolCities = ["New York", "San Francisco"];

    const copyOfCoolCities = [...coolCities];

    console.log(copyOfCoolCities);

    // To add an element to the front of the new array, we simply type in the new
    // element before spreading the elements in the original array:

    const allCities = ["Los Angeles", ...coolCities];
    console.log(allCities);

    // to add a new item to the end of an Array, we type in the new element
    //  after spreading the elements in the original array:
    const coolCats = ["Hobbes", "Felix", "Tom"];
    console.log(coolCats);

    const allCats = [...coolCats, "Garfield"];

    console.log(allCats);

// Remove Elements from an Array

    // As complements for .push() and .unshift(), respectively, we have .pop() and .shift().

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    console.log(days.pop()); //removed sun

    const dayss = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    console.log(dayss.shift()); //removed mon 

    // .slice() returns a portion, or slice, of an Array
    // If we don't provide any arguments, .slice() will return a copy of the original Array with all elements intact:
    // We can also provide one or two arguments to .slice(): 
        // the first is the index where the slice should begin 
        // and the second is the index BEFORE WHICH IT SHOULD END

        const days2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        days2.slice(2, 5); // => ["Wed", "Thu", "Fri"]

        // When we provide a negative index, the JavaScript engine knows to start counting from the last element
        days2.slice(-1);
        // => ["Sun"]

    //.splice() allows us to remove elements, add elements, or replace elements (or any combination of the three).
    // The first argument expected by .splice() is the index at which to begin the splice,
    const days3 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    console.log(days3.splice(-2));

    // the second dictates how many elements we want to remove from the Array
    const days4 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    // => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    console.log(days4.splice(2, 3)); // to remove 3 elements, starting with the element at index 2
    // => ["Wed", "Thu", "Fri"]

    // Combining .slice() and the spread operator allows us to replace elements nondestructively, leaving the original Array unharmed:
    const menu = [
        "Jalapeno Poppers",
        "Cheeseburger",
        "Fish and Chips",
        "French Fries",
        "Onion Rings",
    ];
    
    const newMenu = [
        ...menu.slice(0, 1),
        "Veggie Burger",
        "House Salad",
        "Teriyaki Tofu",
        ...menu.slice(3),
    ];
    
    menu;
    // => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]
    
    newMenu;
    // => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]


