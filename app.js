const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const oasInit = require('express-openapi').initialize;
const { apiDoc } = require('./src/api');
const controllers = require('./src/controllers');

// Loads .env values to process.env
dotenv.config();

const setupExpress = async () => {
    const app = express();

    // Useful express middlewares
    app.use(morgan('dev')); // HTTP request logger
    app.use(express.json()); // Recognize request as JSON
    app.use(express.urlencoded({ extended: false })); // Recognize request as strings
    app.use(cookieParser()); // Parse Cookie header and populate req.cookies
    app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

    // Extra middlewares

    // Initialize openAPI
    oasInit({
        app,
        apiDoc,
        exposeApiDocs: true,
        operations: controllers,
    });

    // Auto-generated API docs
    app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(apiDoc));

    // Listen to port
    const server = app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening on port ${server.address().port}`)
    });

    return app;
}

module.exports = setupExpress().catch((error) => {
    console.log(`Error starting server. Error: ${error}`);
    process.exit(1);
});