"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReward = void 0;
function validateReward(req, res, next) {
    const { RewardName } = req.body;
    if (!RewardName) {
        return res.status(400).json({ message: "Reward name is required" });
    }
    if (typeof RewardName !== "string") {
        return res.status(400).json({ message: "Reward name must be a word" });
    }
    next();
}
exports.validateReward = validateReward;
