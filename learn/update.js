// Update by array field index
db.bios.updateOne({ _id: 1 }, { $inc: { 'awards.0.year': 1 } });

// Update based on specified array field in filter object
db.bios.updateOne(
  { _id: 1, 'awards.year': 1967 },
  { $set: { 'awards.$.year': 'hello' } }
);

// Update with arrayFilters. Added since v3.6
db.bios.updateMany(
  // If awards is null (not exists etc.) the operation will be failed
  { awards: { $exists: true } },
  { $set: { 'awards.$[elem].award': 'Turing Award2' } },
  { arrayFilters: [{ 'elem.award': { $eq: 'Turing Award' } }] }
);
