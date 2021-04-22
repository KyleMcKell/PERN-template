import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';
import router from './routes/sample';

const NAMESPACE = 'Server';
const app = express();

//$ Logging requests
app.use((req, res, next) => {
	logging.info(
		NAMESPACE,
		`METHOD - [${req.method}] URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
	);

	res.on('finish', () => {
		logging.info(
			NAMESPACE,
			`METHOD - [${req.method}] URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
		);
	});

	next();
});

//$ Parse Requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//$ Rules of API
app.use((req, res, next) => {
	//! Be Sure to change this
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authroization'
	);

	if (req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
		return res.status(200).json({});
	}

	next();
});

//$ Routes
app.use('/sample', sampleRoutes);

//$ Error Handling
app.use((req, res, next) => {
	const error = new Error('not found');

	return res.status(404).json({
		message: error.message,
	});
});

//$ Create Server
app.listen(config.server.port, () => {
	logging.info(
		NAMESPACE,
		`Server running on ${config.server.hostname}:${config.server.port}`
	);
});
