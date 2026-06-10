import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success)
      return res
        .status(429)
        .json({ message: "Too many Request , Take a chill-pill" });
    next();
  } catch (error) {
    console.log("Too many Request , Take a chill-pill", error);
    next(error);
  }
};

export default rateLimiter;
