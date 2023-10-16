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
exports.addReward = exports.getRandomReward = exports.completeQuest = exports.updateQuest = exports.updateSingleTask = exports.getAllTasks = void 0;
const knex_1 = __importDefault(require("knex"));
const knexFile = require("../../db/knexfile");
const config = knexFile.development;
const db = (0, knex_1.default)(config);
// This function retrieves a list of tasks
function getAllTasks(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db("Tasks").where({ user_id: userID });
    });
}
exports.getAllTasks = getAllTasks;
// This function updates a single task
function updateSingleTask(taskID) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db("Tasks").where({ id: taskID }).update({ status: "complete" });
    });
}
exports.updateSingleTask = updateSingleTask;
// This function updates a quest
function updateQuest(questID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db("Quests").where({ id: questID }).increment("tasks_completed", 1);
        const quest = yield db("Quests").where({ id: questID }).first();
        if (quest.tasks_completed < 3) {
            return yield db("Quests")
                .where({ id: questID })
                .update({ status: "ongoing" });
        }
    });
}
exports.updateQuest = updateQuest;
// Complete a quest
function completeQuest(questID) {
    return __awaiter(this, void 0, void 0, function* () {
        const quest = yield db("Quests").where({ id: questID }).first();
        if (quest.tasks_completed >= 3) {
            return yield db("Quests")
                .where({ id: questID })
                .update({ status: "complete" });
        }
    });
}
exports.completeQuest = completeQuest;
// Retrieve a random reward
function getRandomReward() {
    return __awaiter(this, void 0, void 0, function* () {
        const rewards = yield db("Rewards");
        const randomIndex = Math.floor(Math.random() * rewards.length);
        return rewards[randomIndex];
    });
}
exports.getRandomReward = getRandomReward;
// Add a new reward
function addReward(reward) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db("Rewards").insert(reward);
    });
}
exports.addReward = addReward;
