// Create a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Getting values from the Map
const value1 = myMap.get("key1"); // Retrieves 'value1'
const value2 = myMap.get("key2"); // Retrieves 'value2'

// Checking if a key exists in the Map
const keyExists = myMap.has("key3"); // Returns true

// Removing a key-value pair from the Map
myMap.delete("key3");

// Checking the size of the Map
const mapSize = myMap.size; // Returns the number of key-value pairs in the Map

// Iterating over the key-value pairs in the Map
myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

// Clearing all key-value pairs in the Map
myMap.clear();
