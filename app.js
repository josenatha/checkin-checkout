const express = require('express');

// Router
const { registrationsRouter } = require('./routes/registration.routes');

// utils
const { db } = require('./utils/db');

// conetec to DB
db.authenticate()
	.then(() => console.log('DataBase Authenticated'))
	.catch(err => console.log(err));

db.sync()
	.then(() => console.log('DataBase Synced'))
	.catch(err => console.log(err));

// init express app
const app = express();

// Enable JSON
app.use(express.json());

// Endpoints
app.use('/api/v1/registrations', registrationsRouter);

const PORT = 4000;

app.listen(PORT, () => {
	console.log('Server running on port:', PORT);
});
