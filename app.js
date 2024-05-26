const express = require('express');
const app = express();

const columnRouter = require('./routes/column.Routes');

app.use('/column', columnRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
