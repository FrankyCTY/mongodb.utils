// Use external editor - process "edit" to open
// config.set('editor', 'code --wait');
config.set('editor', 'vim');

// Helpers function for some node api methods - https://www.mongodb.com/docs/manual/reference/method/js-native/#std-label-native-in-mongosh
ls = (dirPath) => {
  if (!dirPath) return fs.readdirSync('.');

  return fs.readdirSync(dirPath);
};

pwd = () => process.cwd();

db.getConnectionStatus = () => db.runCommand({ connectionStatus: 1 });
db.getLastError = () => db.runCommand({ getLastError: 1 });
