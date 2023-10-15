"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskService_1 = require("../services/taskService");
const router = express_1.default.Router();
exports.default = router;
//handler for GET /tasks
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, taskService_1.getAvailableTasks)();
        res.json(tasks);
    }
    catch (err) {
        res.status(500).send('Server error');
    }
}));
//handler for POST /tasks/Select
router.post('/select', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskID, userID } = req.body;
    try {
        // SelectTask function that associates a task with a user in the database
        yield (0, taskService_1.selectTask)(taskID, userID);
        res.status(200).send('Task selected');
    }
    catch (err) {
        res.status(500).send('Server error');
    }
}));
//handler for POST /tasks/deselect
router.post('/deselect', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskID, userID } = req.body;
    try {
        // DeselectTask function that removes the association between a task and a user in the database
        yield (0, taskService_1.deselectTask)(taskID, userID);
        res.status(200).send('Task deselected');
    }
    catch (err) {
        res.status(500).send('Server error');
    }
}));
router.patch('/complete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskID, userID } = req.body;
    try {
        //CompleteTask function that marks a task as completed in the database
        yield (0, taskService_1.completeTask)(taskID, userID);
        res.status(200).send('Task completed');
    }
    catch (err) {
        res.status(500).send('Server error');
    }
}));
