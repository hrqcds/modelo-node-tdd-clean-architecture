import { Request, Response, NextFunction } from "express";
import { AppError } from "@errors/AppError";

class ErrorMiddleware {
  async handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

const errorMiddleware = new ErrorMiddleware();

export { errorMiddleware };
