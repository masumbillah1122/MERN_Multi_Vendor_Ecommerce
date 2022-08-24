# mongoose-connect-db

Mongoose's default connection logic is deprecated as of 4.11.0. Please opt in to the new connection logic.

* `useMongoClient` option
* native promise library
* write concern (journal acknowledged)
* close mongoose connection on exit

Installation
-------------

```bash
npm i --save mongoose-connect-db
```

Usage
-------------------

```javascript
const mongoose = require('mongoose');
const connectDb = require('mongoose-connect-db');

connectDb(mongoose, dbURI);
```

More
------------------
http://mongoosejs.com/docs/connections.html

http://mongoosejs.com/docs/promises.html
