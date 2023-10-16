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
const MainService_1 = require("../services/MainService");
const router = express_1.default.Router();
// Retrieve a list of tasks for the User
router.get('/tasks/:userid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userID = parseInt(req.params.userid);
    try {
        const tasks = yield (0, MainService_1.getAllTasks)(userID);
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving tasks", error: err });
    }
}));
// Update a task when a user completes it
router.patch('/tasks/complete/:taskid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskID = parseInt(req.params.taskid);
    try {
        const singleTask = yield (0, MainService_1.updateSingleTask)(taskID);
        res.json(singleTask);
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving task", error: err });
    }
}));
// Update a Quest with the tasks completed
router.patch('/quests/update/:questid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questID = parseInt(req.params.questid);
    try {
        const updatedQuest = yield (0, MainService_1.updateQuest)(questID);
        res.json(updatedQuest);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating quest", error: err });
    }
}));
// When three tasks are completed, a Quest is updated to be completed
router.patch('/quests/complete/:questid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questID = parseInt(req.params.questid);
    try {
        const completedQuest = yield (0, MainService_1.completeQuest)(questID);
        res.json(completedQuest);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating quests", error: err });
    }
}));
// Retrieve a single random reward upon quest completion
router.get('/rewards/random', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reward = yield (0, MainService_1.getRandomReward)();
        res.json(reward);
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving reward", error: err });
    }
}));
// Create a new reward that will be added to the rewards list
router.post('/rewards/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reward = yield (0, MainService_1.addReward)(req.body);
        res.json(reward);
    }
    catch (err) {
        res.status(500).json({ message: "Error adding reward", error: err });
    }
}));
exports.default = router;
