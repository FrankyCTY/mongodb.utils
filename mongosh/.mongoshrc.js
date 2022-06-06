console.log('Welcome Back Franky');

scriptDir = '/home/tak/pdir/mongodb.utils/mongosh';

// we just use .mongoshrc works as an entry point to the actual start up script
load(`${scriptDir}/startup.js`);
