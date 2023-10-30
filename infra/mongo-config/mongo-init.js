// Connect to the 'admin' database for administrative tasks
db = db.getSiblingDB('admin');

if (!db.getCollectionNames().includes('myCollection')) {
    // If 'mydb' doesn't exist, create it and add a collection 'myCollection'
    print("Database 'weather-app' does not exists. Creating db");
    db = db.getSiblingDB('weather-app');
    db.createCollection('myCollection');

    // Insert data into 'myCollection' if needed
    db.myCollection.insert({
        key1: 'value1',
        key2: 'value2',
    });
} else {
    // The database 'mydb' already exists
    print("Database 'weather-app' already exists.");
}



