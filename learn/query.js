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
// Will not match
// ['FP', 'Fortran', 'ALGOL', 'Backus-Naur Form']
// ['ALGOL', 'Backus-Naur Form', 'FP']
// ['Fortran', 'ALGOL', 'Backus-Naur Form', 'FP', 'Additional Info']

// Return matching array element
db.bios.find({ 'awards.year': 1967 }, { 'awards.$': 1 });

// Range queries - Different from scalar type, range is evaluated on each parts instead of intersection
// $elemMatch
db.bios.find({
  awards: {
    $elemMatch: {
      year: { $gt: 1996, $lt: 2000 },
      award: 'National Medal of Technology',
    },
  },
});
