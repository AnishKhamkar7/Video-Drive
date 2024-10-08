import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/token.utils";
import ErrorFactory from "../Error/ErrorFactory";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return next(ErrorFactory.Unauthorized("Invalid Authorization token"));
  }

  try {
    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return next(ErrorFactory.Unauthorized("Unauthorized - Invalid token"));
    }

    req.user = verifiedToken as { id: string; role: string };

    next();
  } catch (error) {
    return next(ErrorFactory.InternalServerError("Failed to verify token"));
  }
};

export default authMiddleware;
