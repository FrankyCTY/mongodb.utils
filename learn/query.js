// ============ Scalar Type ============

// Range queries on scalar type
var cursor = db.bios.find(
  { 'awards.0.year': { $gte: 1975, $lte: 2000 } },
  { awards: 1 }
);

print(`Total number of bios found: `, cursor.toArray().length);

// $in - Better performance than $or as the query optimizer handles it more efficiently
db.bios.find({ 'awards.year': { $in: [2001, 1967] } });

// ============ Array Type ============
// Exact match
db.bios.find({ contribs: ['Fortran', 'ALGOL', 'Backus-Naur Form', 'FP'] });
/**
 * Will not match
 * ['FP', 'Fortran', 'ALGOL', 'Backus-Naur Form']
 * ['ALGOL', 'Backus-Naur Form', 'FP']
 * ['Fortran', 'ALGOL', 'Backus-Naur Form', 'FP', 'Additional Info']
 */

// Range queries on scalar type in a specific element in the array field
var cursor = db.bios.find(
  { 'awards.0.year': { $gte: 1975, $lte: 2000 } },
  { awards: 1 }
);

// Return matching array element
db.bios.find({ 'awards.year': 1967 }, { 'awards.$': 1 });

// Query document that meet the criteria even if the criterias are matched (shared) by multiple elements
db.bios.find({ 'comments.author': 'joe', 'comments.score': { $gte: 5 } });

// Range queries - Different from scalar type, range is evaluated on each parts instead of intersection
// $elemMatch
/**
 * Behavior - Match if at least 1 element in the array field match all the criteria
 */
db.bios.find({
  awards: {
    $elemMatch: {
      year: { $gt: 1996, $lt: 2000 },
      award: 'National Medal of Technology',
    },
  },
});

// ============ Subdocument (embedded document) Type ============
// Full subdocument query - require exact match
/**
 * "name" : {
        "first" : "John", 
        "last" : "Backus"
    }, 
 */
// match
db.bios.findOne({ name: { first: 'John', last: 'Backus' } });
/**
 * not match
 * - filter order not match - db.bios.findOne({name: {"first": "John", "last": "Backus"}})
 * - missing fields - db.bios.findOne({name: {"first": "John"}})
 */

// Query by keys
db.bios.findOne({ 'name.first': 'John', 'name.last': 'Backus' });
