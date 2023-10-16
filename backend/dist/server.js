"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RouteMaster_1 = __importDefault(require("./routes/RouteMaster"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create a new express application instance
const app = (0, express_1.default)();
// The port the express app will listen on
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
// Parse URL encoded bodies
app.use(express_1.default.urlencoded({ extended: true }));
// Parse JSON
app.use(express_1.default.json());
// Attach the routers
app.use('/api', RouteMaster_1.default);
// Define Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Start Express server
app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});
