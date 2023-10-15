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
exports.deselectTask = exports.completeTask = exports.selectTask = exports.getAvailableTasks = void 0;
const knex_1 = __importDefault(require("knex"));
const knexFile = require('../../db/knexfile');
const config = knexFile.development;
const db = (0, knex_1.default)(config);
function getAvailableTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tasks = yield db('TaskTable').select('*');
            return tasks;
        }
        catch (err) {
            console.error(err);
            throw new Error('Error getting tasks');
        }
    });
}
exports.getAvailableTasks = getAvailableTasks;
function selectTask(taskID, userID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db('TaskCompletion').insert({
                UserID: userID,
                TaskID: taskID,
                Status: 'Selected',
                Points: 10,
                DateCompleted: null
            });
        }
        catch (err) {
            console.error(err);
            throw new Error('Error selecting task');
        }
    });
}
exports.selectTask = selectTask;
function completeTask(taskID, userID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db('TaskCompletion').where({
                UserID: userID,
                TaskID: taskID
            }).update({
                Status: 'Completed',
                DateCompleted: new Date()
            });
        }
        catch (err) {
            console.error(err);
            throw new Error('Error completing task');
        }
    });
}
exports.completeTask = completeTask;
function deselectTask(taskID, userID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db('TaskCompletion').where({
                UserID: userID,
                TaskID: taskID
            }).delete();
        }
        catch (err) {
            console.error(err);
            throw new Error('Error deselecting task');
        }
    });
}
exports.deselectTask = deselectTask;
