Global mongoose instance
===================

Installation
-------------

```bash
npm i --save mongoose-global
```

Usage
-------------------

```javascript
const {mongoose} = require('mongoose-global');
// or
const mongoose = require('mongoose-global')();
// or
const mongoose = require('mongoose-global')(dbURI);
// or
const mongoose = require('mongoose-global').connect(dbURI);
// or
const connectDb = require('mongoose-global');
const mongoose = connectDb(dbURI, options);
```

You need to connect only once. Then you can just require mongoose anywhere and use.

New connection logic is used with native promises and `useMongoClient` option.
