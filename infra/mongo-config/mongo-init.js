// Connect to the 'admin' database for administrative tasks
db = db.getSiblingDB('admin');

if (!db.getCollectionNames().includes('myCollection')) {
    // If 'mydb' doesn't exist, create it and add a collection 'myCollection'
    print("Database 'patients-db' does not exists. Creating db");
    db = db.getSiblingDB('patients-db');
    db.createCollection('patients-enrollment-service');

    // Insert data into 'myCollection' if needed
    db.myCollection.insert({
        key1: 'value1',
        key2: 'value2',
    });
} else {
    // The database 'mydb' already exists
    print("Database 'patients-db' already exists.");
}



