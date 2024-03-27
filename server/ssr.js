import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../dist/bundle.js';

const app = express();
console.log(Home);

const content = renderToString(<Home />);
app.get('/', (req, res) => res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        ${content}
   </body>
</html>
`));

app.listen(3001, () => console.log('Exampleapp listening on port 3001!'));
