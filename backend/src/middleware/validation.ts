import Express from "express";

export function validateReward(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
  const { RewardName } = req.body;

  if (!RewardName) {
    return res.status(400).json({message: "Reward name is required"});
  }

  if (typeof RewardName !== "string") {
    return res.status(400).json({message: "Reward name must be a word"});
  }

  next();
}