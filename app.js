const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

// Additional
const cors = require('cors');
const jsend = require('./src/middlewares/jsend');

const oasInit = require('express-openapi').initialize;
const { apiDoc } = require('./src/api');
const controllers = require('./src/controllers');
const setupDb = require('./src/helpers/setupDb');
const securityHandlers = require('./src/api/extras/securityHandlers');
const { appendFileSync } = require('fs');

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
    app.use(cors())
    app.use(jsend)

    // Setup database
    await setupDb();

    // Initialize openAPI
    oasInit({
        app,
        apiDoc,
        exposeApiDocs: true,
        operations: controllers,
        securityHandlers,
    });


    // Auto-generated API docs
    app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(apiDoc));

    // Listen to port
    const server = app.listen(process.env.PORT || 5001, () => {
        console.log(`Listening on port ${server.address().port}`)
    });

    return app;
}

module.exports = setupExpress().catch((error) => {
    console.log(`Error starting server. Error: ${error}`);
    process.exit(1);
});