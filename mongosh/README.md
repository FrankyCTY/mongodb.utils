# Mongosh utilities

Mongosh is a mongodb shell that is a fully functional JavaScript and Node.js environment for interacting with MongoDB deployments etc.

Notion Doc

> https://www.notion.so/frankychan/Logs-MongoDB-197301aa60b34bd49e81470ba43e89ee#a76981b0be9b4af3b6d247c0d08d6c0e

## Use mongosh start up script

- Put `.mongoshrc.js` in the root directory

### Connect to database

```javascript
mongosh <connection string> -u username -p password
```
