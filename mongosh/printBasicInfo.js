result = db.getMongo();
console.log('Current connection string is:', result);

result = db.getName();
console.log('Current connected database name is:', result);
