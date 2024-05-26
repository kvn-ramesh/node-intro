const express = require('express');
const app = express();

const columnRouter = require('./routes/column.Routes');

app.use('/column', columnRouter);

app.listen(3000);

